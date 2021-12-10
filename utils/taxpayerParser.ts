const parseTaxpayer = jpk => {
  const jpkTaxpayer = (jpk.Podmiot1 || jpk['tns:Podmiot1'])[0];
  if (!jpkTaxpayer) {
    throw new Error('Wrong JPK taxpayer object');
  }

  let taxpayer: any = {
    type: jpkTaxpayer.$ ? 'naturalPerson' : 'company',
  };
  delete jpkTaxpayer.$;

  for (const entry of Object.entries(jpkTaxpayer)) {
    const name = entry[0].replace('tns:', '');
    const value = entry[1][0];
    if (taxpayer.type === 'naturalPerson') {
      switch (name) {
        case 'OsobaFizyczna':
          taxpayer.name = `${value['etd:ImiePierwsze']} ${value['etd:Nazwisko']}`;
          taxpayer.vatId = value['etd:NIP'][0];
          break;
      }
    } else {
      switch (name) {
        case 'IdentyfikatorPodmiotu':
          taxpayer.name = value['etd:PelnaNazwa'][0];
          taxpayer.vatId = value['etd:NIP'][0];
          break;
      }
    }
  }

  return taxpayer;
};

export default parseTaxpayer;
