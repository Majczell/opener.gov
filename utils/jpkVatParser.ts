import { IJpkVatReport } from "../interfaces/IJpkVat";
import { getValue, parseJpkArray, parseJpkObject } from "./helpers";

const parseJpkVat = (jpk): IJpkVatReport => {
  const parsedJpk = parseJpkObject(jpk);
  const declaration = parseJpkObject(parsedJpk.Deklaracja);
  const header = parseJpkObject(declaration.Naglowek);
  const details = parseJpkObject(declaration.PozycjeSzczegolowe);
  const purchaseRows = parseJpkArray(parsedJpk.Ewidencja.ZakupWiersz || parsedJpk.Ewidencja['tns:ZakupWiersz'] || []);
  const saleRows = parseJpkArray(parsedJpk.Ewidencja.SprzedazWiersz || parsedJpk.Ewidencja['tns:SprzedazWiersz'] || []);

  saleRows.forEach(row => {
    row.KorektaPodstawyOpodt = !!row.KorektaPodstawyOpodt;

    const keys = Object.keys(row);
    row.GTU = keys.find(name => name.includes('GTU'));

    if (keys.includes('WSTO_EE')) {
      row.Procedura = 'WSTO_EE';
    } else if (keys.includes('IED')) {
      row.Procedura = 'IED';
    } else if (keys.includes('TP')) {
      row.Procedura = 'TP';
    } else if (keys.includes('TT_WNT')) {
      row.Procedura = 'TT_WNT';
    } else if (keys.includes('TT_D')) {
      row.Procedura = 'TT_D';
    } else if (keys.includes('MR_T')) {
      row.Procedura = 'MR_T';
    } else if (keys.includes('MR_UZ')) {
      row.Procedura = 'MR_UZ';
    } else if (keys.includes('I_42')) {
      row.Procedura = 'I_42';
    } else if (keys.includes('I_63')) {
      row.Procedura = 'I_63';
    } else if (keys.includes('B_SPV')) {
      row.Procedura = 'B_SPV';
    } else if (keys.includes('B_SPV_DOSTAWA')) {
      row.Procedura = 'B_SPV_DOSTAWA';
    } else if (keys.includes('B_MPV_PROWIZJA')) {
      row.Procedura = 'B_MPV_PROWIZJA';
    }
  });

  return {
    declarationCode: header.KodFormularzaDekl._,
    details,
    purchaseRows,
    saleRows,
  };
};

export default parseJpkVat;
