import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IAppContext } from "../interfaces/IAppContext";
import { IFile } from "../interfaces/IFile";
import { IReport } from "../interfaces/IReport";
import { IJpkReport } from "../pages";

export const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useResponseContext must be used within the ResponseProvider');
  }
  return context;
};

const AppProvider = (props: any) => {
  const [ loadedFiles, setLoadedFiles ] = useState<{ id: string; file: File }[]>([]);
  const [ openedFiles, setOpenedFiles ] = useState<(IFile & IReport<IJpkReport>)[]>([]);
  const [ error, setError ] = useState<string>();
  const [ selectedFiles, setSelectedFiles ] = useState([]);
  const [ maxFilesUploaded, setMaxFilesUploaded ] = useState(null);
  const [ maxFilesOnList, setMaxFilesOnList ] = useState(null);
  
  useEffect(() => {
    const itemsFromLS = localStorage.getItem("lastProcessedFiles") && JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
    setOpenedFiles(itemsFromLS);
  }, []);

  useEffect(() => {
    const maxNumberOfFilesUploaded = localStorage.getItem("maxNumberOfFilesUploaded");
    if (!maxNumberOfFilesUploaded) {
      localStorage.setItem("maxNumberOfFilesUploaded",JSON.stringify(10));
      setMaxFilesUploaded(10);
    } else {
      setMaxFilesUploaded(JSON.parse(maxNumberOfFilesUploaded));
    }
  }, []);

  useEffect(() => {
    const maxNumberOfFilesOnTheList = localStorage.getItem("maxNumberOfFilesOnTheList");
    if (!maxNumberOfFilesOnTheList) {
      localStorage.setItem("maxNumberOfFilesOnTheList",JSON.stringify(20));
      setMaxFilesOnList(20);
    } else {
      setMaxFilesOnList(JSON.parse(maxNumberOfFilesOnTheList));
    }
  }, []);

  const value = useMemo(() => ({
    loadedFiles, setLoadedFiles,
    openedFiles, setOpenedFiles,
    error, setError,
    selectedFiles, setSelectedFiles,
    maxFilesUploaded, setMaxFilesUploaded,
    maxFilesOnList, setMaxFilesOnList
  }), [
    error,
    loadedFiles,
    openedFiles,
    selectedFiles,
    maxFilesUploaded,
    maxFilesOnList
  ]);

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;
