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
  const [loadedFiles, setLoadedFiles] = useState<{ id: string; file: File }[]>([]);
  const [openedFiles, setOpenedFiles] = useState<(IFile & IReport<IJpkReport>)[]>([]);
  const [error, setError] = useState<string>();
  const [selectedFiles, setSelectedFiles] = useState([]);

  console.log(openedFiles);
  
  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
    setOpenedFiles(itemsFromLS);
  }, []);

  const value = useMemo(() => ({
    loadedFiles, setLoadedFiles,
    openedFiles, setOpenedFiles,
    error, setError,
    selectedFiles, setSelectedFiles
  }), [
    error,
    loadedFiles,
    openedFiles,
    selectedFiles
  ]);

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;
