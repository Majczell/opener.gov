import { IJpkReport } from "../pages";
import { IFile } from "./IFile";
import { IReport } from "./IReport";

export interface IAppContext {
  error: string;
  loadedFiles: { id: string; file: File }[];
  openedFiles: (IFile & IReport<IJpkReport>)[];
  selectedFiles: string[];
  setError: (value: string) => void;
  setLoadedFiles: (value: { id: string; file: File }[]) => void;
  setOpenedFiles: (value: (IFile & IReport<IJpkReport>)[]) => void;
  setSelectedFiles: (calue: string[]) => void;
}