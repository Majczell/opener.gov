import { IJpkFaReport } from "../interfaces/IJpkFa";
import { parseJpkArray, parseJpkObject } from "./helpers";

const parseJpkFa = (jpk): IJpkFaReport => {
  const invoices = parseJpkArray(jpk.Faktura || jpk['tns:Faktura']);
  const invoicesRows = parseJpkArray(jpk.FakturaWiersz || jpk['tns:FakturaWiersz'])
  
  invoices.forEach(invoice => {
    invoice.rows = invoicesRows.filter(({ P_2B }) => invoice.P_2A === P_2B);
  });
  return { invoices };
};

export default parseJpkFa;
