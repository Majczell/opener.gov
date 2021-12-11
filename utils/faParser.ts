import { getValue } from "./helpers";

const parseFa = jpk => {
  const jpkInvoices = jpk.Faktura || jpk['tns:Faktura'];
  const invoices = [];

  for (const invoice of jpkInvoices) {
    const invoiceDetails = {
      currency: getValue(invoice, 'KodWaluty'), // Trzyliterowy kod waluty (ISO-4217), w której faktura, zamówienie lub umowa zostały wystawione
      date: getValue(invoice, 'P_1'), // Data wystawienia
      number: getValue(invoice, 'P_2A'), // Kolejny numer faktury, nadany w ramach jednej lub więcej serii, który w sposób jednoznaczny indentyfikuje fakturę

      buyerName: getValue(invoice, 'P_3A'), // Imię i nazwisko lub nazwa nabywcy towarów lub usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy
      buyerAddress: getValue(invoice, 'P_3B'), // Adres nabywcy. Pole opcjonalne dla przypadków określonych w art. 106e ust. 5 pkt 3 ustawy oraz w § 3 pkt 4 rozporządzenia Ministra Finansów z dnia 3 grudnia 2013 r. w sprawie wystawiania faktur (Dz. U. z 2013 r., poz. 1485)
      buyerCountryCode: getValue(invoice, 'P_5A'), // Kod (prefiks) nabywcy - podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 ustawy
      buyerTaxId: getValue(invoice, 'P_5B'), // Numer, za pomocą którego nabywca towarów lub usług jest identyfikowany dla podatku lub podatku od wartości dodanej, pod którym otrzymał on towary lub usługi, z zastrzeżeniem pkt 24 lit. b ustawy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 2 ustawy. W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2 ustawy, numer, o którym mowa w art. 136 ust. 1 pkt 4 ustawy

      sellerName: getValue(invoice, 'P_3C'), // Imię i nazwisko lub nazwa sprzedawcy towarów lub usług
      sellerAddress: getValue(invoice, 'P_3D'), // Adres sprzedawcy
      sellerCountryCode: getValue(invoice, 'P_4A'), // Kod (prefiks) podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 ustawy
      sellerTaxId: getValue(invoice, 'P_4B'), // Numer, za pomocą którego podatnik jest zidentyfikowany na potrzeby podatku, z zastrzeżeniem pkt 24 lit. a ustawy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 4 pkt 2 ustawy. W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2 ustawy, numer, o którym mowa w art. 136 ust. 1 pkt 3 ustawy

      deliveryDate: getValue(invoice, 'P_6'), // Data dokonania lub zakończenia dostawy towarów lub wykonania usługi lub data otrzymania zapłaty, o której mowa w art. 106b ust. 1 pkt 4, o ile taka data jest określona i różni się od daty wystawienia faktury

      netSaleStandardRate: getValue(invoice, 'P_13_1'), // Suma wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota zaliczki netto
      taxSaleStandardRate: getValue(invoice, 'P_14_1'), // Kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy
      taxSaleStandardRateConverted: getValue(invoice, 'P_14_1W'), // W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy

      netSaleLoweredFirstRate: getValue(invoice, 'P_13_2'), // Suma wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8 % albo 7%. W przypadku faktur zaliczkowych, kwota zaliczki netto
      taxSaleLoweredFirstRate: getValue(invoice, 'P_14_2'), // Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8% albo 7%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy
      taxSaleLoweredFirstRateConverted: getValue(invoice, 'P_14_2W'), // W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 8% albo 7%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy

      netSaleLoweredSecondRate: getValue(invoice, 'P_13_3'), // Suma wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. W przypadku faktur zaliczkowych, kwota zaliczki netto
      taxSaleLoweredSecondRate: getValue(invoice, 'P_14_3'), // Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy
      taxSaleLoweredSecondRateConverted: getValue(invoice, 'P_14_3W'), // W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 5%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy

      netSaleLoweredThirdRate: getValue(invoice, 'P_13_4'), // Suma wartości sprzedaży netto ze stawką obniżoną trzecią w walucie, w której faktura została wystawiona - procedura odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy VAT oraz dla stawki 4% w przypadku ryczałtu dla taksówek osobowych. W przypadku faktur zaliczkowych, kwota zaliczki netto
      taxSaleLoweredThirdRate: getValue(invoice, 'P_14_4'), // Kwota "0" dla procedury odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy VAT oraz kwota podatku od sumy wartości sprzedaży netto dla stawki 4% w walucie, w której faktura została wystawiona w przypadku ryczałtu dla taksówek osobowych. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy
      taxSaleLoweredThirdRateConverted: getValue(invoice, 'P_14_4W'), // W przypadku gdy faktura jest wystawiona w walucie obcej, kwota "0" dla procedury odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy VAT oraz kwota podatku od sumy wartości sprzedaży netto w walucie obcej dla stawki 4% w przypadku ryczałtu dla taksówek osobowych, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy

      netSaleUE: getValue(invoice, 'P_13_5'), // Suma wartości sprzedaży netto dla transakcji dostawy towarów oraz świadczenia usług poza terytorium kraju. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 oraz ust. 4 pkt 1, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy
      netSaleZeroVat: getValue(invoice, 'P_13_6'), // Suma wartości sprzedaży netto ze stawką 0%. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy
      netSaleVatExemption: getValue(invoice, 'P_13_7'), // Suma wartości sprzedaży zwolnionej. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pola opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy
      netSum: getValue(invoice, 'P_15'), // Kwota należności ogółem lub w przypadku faktur zaliczkowych, otrzymana kwota zapłaty

      isCashMethod: getValue(invoice, 'P_16'), // W przypadku dostawy towarów lub świadczenia usług, w odniesieniu do których obowiązek podatkowy powstaje zgodnie z art. 19a ust. 5 pkt 1 lub art. 21 ust. 1 - wyrazy "metoda kasowa", należy podać wartość "true"; w przeciwnym przypadku - wartość "false"
      isSelfInvoiced: getValue(invoice, 'P_17'), // W przypadku faktur, o których mowa w art. 106d ust. 1 - wyraz "samofakturowanie", należy podać wartość "true"; w przeciwnym przypadku - wartość "false"
      isReverseCharge: getValue(invoice, 'P_18'), // W przypadku dostawy towarów lub wykonania usługi, dla których obowiązanym do rozliczenia podatku od wartości dodanej lub podatku o podobnym charakterze jest nabywca towaru lub usługi - wyrazy "odwrotne obciążenie", należy podać wartość "true", w przeciwnym przypadku - wartość "false"
      isSplitPayment: getValue(invoice, 'P_18A'), // W przypadku faktur, w których kwota należności ogółem stanowi kwotę, o której mowa w art. 19 pkt 2 ustawy z dnia 6 marca 2018 r. - Prawo przedsiębiorców, obejmujących dokonaną na rzecz podatnika dostawę towarów lub świadczenie usług wymienionych w załączniku nr 15 do ustawy - wyrazy „mechanizm podzielonej płatności”, należy podać wartość "true", w przeciwnym przypadku - wartość "false"
      isTaxFree: getValue(invoice, 'P_19'), // W przypadku dostawy towarów lub świadczenia usług zwolnionych od podatku na podstawie art. 43 ust. 1, art. 113 ust. 1 i 9 albo przepisów wydanych na podstawie art. 82 ust. 3 należy podać wartość "true", w przeciwnym przypadku - wartość "false"

      taxFreeLawAct: getValue(invoice, 'P_19A'), // Jeśli pole P_19 równa się "true" - należy wskazać przepis ustawy albo aktu wydanego na podstawie ustawy, na podstawie którego podatnik stosuje zwolnienie od podatku
      taxFreeDirectiveAct: getValue(invoice, 'P_19B'), // Jeśli pole P_19 równa się "true" - należy wskazać przepis dyrektywy 2006/112/WE, który zwalnia od podatku taką dostawę towarów lub takie świadczenie usług
      taxFreeOtherLegalBasis: getValue(invoice, 'P_19C'), // Jeśli pole P_19 równa się "true" - należy wskazać inną podstawę prawną wskazującą na to, że dostawa towarów lub świadczenie usług korzysta ze zwolnienia

      isObligatoryForDebtor: getValue(invoice, 'P_20'), // W przypadku, o którym mowa w art. 106c ustawy należy podać wartość "true", w przeciwnym przypadku - wartość "false"

      enforcementAuthorityName: getValue(invoice, 'P_20A'), // Jeśli pole P_20 równa się "true" - należy podać nazwę organu egzekucyjnego lub imię i nazwisko komornika sądowego
      enforcementAuthorityAddress: getValue(invoice, 'P_20B'), // Jeśli pole P_20 równa się "true" - należy podać adres organu egzekucyjnego lub komornika sądowego
      
      issuedByRepresentative: getValue(invoice, 'P_21'), // W przypadku faktur wystawianych w imieniu i na rzecz podatnika przez jego przedstawiciela podatkowego należy podać wartość "true", w przeciwnym przypadku - wartość "false"
      representativeName: getValue(invoice, 'P_21A'), // Jeśli pole P_21 równa się "true" - należy podać nazwę lub imię i nazwisko przedstawiciela podatkowego
      representativeAddress: getValue(invoice, 'P_21B'), // Jeśli pole P_21 równa się "true" - należy podać adres przedstawiciela podatkowego
      representativeTaxId: getValue(invoice, 'P_21C'), // Jeśli pole P_21 równa się "true" - należy podać numer przedstawiciela podatkowego, za pomocą którego jest on zidentyfikowany na potrzeby podatku
      
      isNewModeOfTransportation: getValue(invoice, 'P_22'), // W przypadku gdy przedmiotem wewnątrzwspólnotowej dostawy są nowe środki transportu należy podać wartość "true", w przeciwnym przypadku - wartość "false"
      transportationReleaseDate: getValue(invoice, 'P_22A'), // Jeśli pole P_22 równa się "true" - należy podać datę dopuszczenia nowego środka transportu do użytku
      transportationMileage: getValue(invoice, 'P_22B'), // Jeśli pole P_22 równa się "true" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - należy podać przebieg pojazdu
      transportationNumberOfWorkingHours: getValue(invoice, 'P_22C'), // Jeśli pole P_22 równa się "true" a dostawa dotyczy jednostek pływających, o których mowa w art. 2 pkt 10 lit. b ustawy, oraz statków powietrznych, o których mowa w art. 2 pkt 10 lit. c ustawy, należy podać liczbę godzin roboczych używania nowego środka transportu

      isSimplified: getValue(invoice, 'P_23'), // W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2, zawierającej adnotację, o której mowa w art. 136 ust. 1 pkt 1 i stwierdzenie, o którym mowa w art. 136 ust. 1 pkt 2 ustawy należy podać wartość "true", w przeciwnym przypadku - wartość "false"
      isForTravelAgents: getValue(invoice, 'P_106E_2'), // W przypadku świadczenia usług turystyki, dla których podstawę opodatkowania stanowi zgodnie z art. 119 ust. 1 kwota marży, faktura - w zakresie danych określonych w ust. 1 pkt 1-17 - powinna zawierać wyłącznie dane określone w ust. 1 pkt 1-8 i 15-17, a także wyrazy "procedura marży dla biur podróży", należy podać wartość "true", w przeciwnym przypadku - wartość "false"

      isForCollectibles: getValue(invoice, 'P_106E_3'), // W przypadku dostawy towarów używanych, dzieł sztuki, przedmiotów kolekcjonerskich i antyków, dla których podstawę opodatkowania stanowi zgodnie z art. 120 ust. 4 i 5 marża, należy podać wartość "true", w przeciwnym przypadku - wartość "false"
      collectiblesType: getValue(invoice, 'P_106E_3A'), // Jeżeli pole P_106E_3 równa się "true", należy podać wyrazy: "procedura marży - towary używane" lub "procedura marży - dzieła sztuki" lub "procedura marży - przedmioty kolekcjonerskie i antyki"

      type: getValue(invoice, 'RodzajFaktury'), // Rodzaj faktury
    };
    const invoiceRows = jpk.FakturaWiersz.reduce((acc, curr) => {
      if (getValue(curr, 'P_2B') !== invoiceDetails.number) {
        return acc;
      }
      return [
        ...acc,
        {
          goodsOrServiceName: getValue(curr, 'P_7'), // Nazwa (rodzaj) towaru lub usługi. Pole opcjonalne wyłącznie dla przypadku określonego w art 106j ust. 3 pkt 2 ustawy (faktura korekta)
          measureOfGoodsOrServices: getValue(curr, 'P_8A'), // Miara dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy
          numberOfGoodsOrServices: getValue(curr, 'P_8B'), // Ilość (liczba) dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy
          unitNetPrice: getValue(curr, 'P_9A'), // Cena jednostkowa towaru lub usługi bez kwoty podatku (cena jednostkowa netto). Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 3 ustawy
          unitGrossPrice: getValue(curr, 'P_9B'), // Cena wraz z kwotą podatku (cena jednostkowa brutto), w przypadku zastosowania art. 106e ust. 7 i 8 ustawy
          discount: getValue(curr, 'P_10'), // Kwoty wszelkich opustów lub obniżek cen, w tym w formie rabatu z tytułu wcześniejszej zapłaty, o ile nie zostały one uwzględnione w cenie jednostkowej netto. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 1 ustawy
          sumNet: getValue(curr, 'P_11'), // Wartość dostarczonych towarów lub wykonanych usług, objętych transakcją, bez kwoty podatku (wartość sprzedaży netto). Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 3 ustawy
          sumGross: getValue(curr, 'P_11A'), // Wartość sprzedaży brutto, w przypadku zastosowania art. 106e ust. 7 i 8 ustawy
          taxRate: getValue(curr, 'P_12'), // Stawka podatku. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2, 3, 4 pkt 3 i ust. 5 pkt 3 ustawy
        },
      ];
    }, []);
    invoices.push({
      ...invoiceDetails,
      invoiceRows,
    });
  }

  return { invoices };
};

export default parseFa;
