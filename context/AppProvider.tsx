import React, { createContext, useContext, useMemo, useState } from "react";
import { IAppContext } from "../interfaces/IAppContext";

export const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useResponseContext must be used within the ResponseProvider');
  }
  return context;
};

const AppProvider = (props: any) => {
const [loadedFiles, setLoadedFiles] = useState([]);
const [openedFiles, setOpenedFiles] = useState([]);
const [error, setError] = useState<string>();
const [selectedFiles, setSelectedFiles] = useState([]);

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
