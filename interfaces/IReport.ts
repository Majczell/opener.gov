import { IHeader } from "./IHeader";
import { ITaxpayer } from "./ITaxpayer";

export interface IReport<IJpkReport> extends IHeader {
  taxpayer: ITaxpayer;
  report: IJpkReport;
  signatureData: any;
}
