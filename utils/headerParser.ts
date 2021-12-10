import { JPK_Names } from "./config";

const parseHeader = jpk => {
  const jpkHeader = (jpk.Naglowek || jpk['tns:Naglowek'])[0];
  if (!jpkHeader) {
    throw new Error('Wrong JPK header');
  }

  let header: any = {};
  for (const entry of Object.entries(jpkHeader)) {
    const name = entry[0].replace('tns:', '');
    const value = entry[1][0];
    switch (name) {
      case 'KodFormularza':
        header.code = value._;
        header.name = JPK_Names[header.code];
        break;
      case 'DataOd':
        header.since = value;
        break;
      case 'DataDo':
        header.to = value;
        break;
      case 'DataWytworzeniaJPK':
        header.created = value;
        break;
      case 'DomyslnyKodWaluty':
        header.currency = value;
        break;
      case 'CelZlozenia':
        console.log('value', value);
        
        header.type = value === '1' ? 'new' : 'correction';
        break;
    }
  }

  return header;
};

export default parseHeader;
