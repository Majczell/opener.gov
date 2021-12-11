/** JPK FA Report invoice row */
export interface IJpkFaInvoiceRow {
  /** Nazwa (rodzaj) towaru lub usługi. Pole opcjonalne wyłącznie dla przypadku określonego w art 106j ust. 3 pkt 2 ustawy (faktura korekta) */
  P_7: string;

  /** Miara dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy */
  P_8A: string;

  /** Ilość (liczba) dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy */
  P_8B: string;

  /** Cena jednostkowa towaru lub usługi bez kwoty podatku (cena jednostkowa netto). Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 3 ustawy */
  P_9A: string;

  /** Cena wraz z kwotą podatku (cena jednostkowa brutto), w przypadku zastosowania art. 106e ust. 7 i 8 ustawy */
  P_9B: string;

  /** Kwoty wszelkich opustów lub obniżek cen, w tym w formie rabatu z tytułu wcześniejszej zapłaty, o ile nie zostały one uwzględnione w cenie jednostkowej netto. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 1 ustawy */
  P_10: string;

  /** Wartość dostarczonych towarów lub wykonanych usług, objętych transakcją, bez kwoty podatku (wartość sprzedaży netto). Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 3 ustawy */
  P_11: string;

  /** Wartość sprzedaży brutto, w przypadku zastosowania art. 106e ust. 7 i 8 ustawy */
  P_11A: string;

  /** Stawka podatku. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2, 3, 4 pkt 3 i ust. 5 pkt 3 ustawy */
  P_12: string;
}

/** JPK FA Report invoice */
export interface IJpkFaInvoice {
  /** Trzyliterowy kod waluty (ISO-4217), w której faktura, zamówienie lub umowa zostały wystawione */
  KodWaluty: string;

  /** Data wystawienia */
  P_1: string;

  /** Kolejny numer faktury, nadany w ramach jednej lub więcej serii, który w sposób jednoznaczny indentyfikuje fakturę */
  P_2A: string;

  /** Imię i nazwisko lub nazwa nabywcy towarów lub usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy */
  P_3A: string;

  /** Adres nabywcy. Pole opcjonalne dla przypadków określonych w art. 106e ust. 5 pkt 3 ustawy oraz w § 3 pkt 4 rozporządzenia Ministra Finansów z dnia 3 grudnia 2013 r. w sprawie wystawiania faktur (Dz. U. z 2013 r., poz. 1485) */
  P_3B: string;

  /** Kod (prefiks) nabywcy - podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 ustawy */
  P_5A: string;

  /** Numer, za pomocą którego nabywca towarów lub usług jest identyfikowany dla podatku lub podatku od wartości dodanej, pod którym otrzymał on towary lub usługi, z zastrzeżeniem pkt 24 lit. b ustawy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 2 ustawy. W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2 ustawy, numer, o którym mowa w art. 136 ust. 1 pkt 4 ustawy */
  P_5B: string;

  /** Imię i nazwisko lub nazwa sprzedawcy towarów lub usług */
  P_3C: string;

  /** Adres sprzedawcy */
  P_3D: string;

  /** Kod (prefiks) podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 ustawy */
  P_4A: string;

  /** Numer, za pomocą którego podatnik jest zidentyfikowany na potrzeby podatku, z zastrzeżeniem pkt 24 lit. a ustawy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 4 pkt 2 ustawy. W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2 ustawy, numer, o którym mowa w art. 136 ust. 1 pkt 3 ustawy */
  P_4B: string;

  /** Data dokonania lub zakończenia dostawy towarów lub wykonania usługi lub data otrzymania zapłaty, o której mowa w art. 106b ust. 1 pkt 4, o ile taka data jest określona i różni się od daty wystawienia faktury */
  P_6: string;

  /** Suma wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota zaliczki netto */
  P_13_1: string;

  /** Kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_1: string;

  /** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_1W: string;

  /** Suma wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8 % albo 7%. W przypadku faktur zaliczkowych, kwota zaliczki netto */
  P_13_2: string;

  /** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8% albo 7%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_2: string;

  /** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 8% albo 7%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_2W: string;

  /** Suma wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. W przypadku faktur zaliczkowych, kwota zaliczki netto */
  P_13_3: string;

  /** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_3: string;

  /** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 5%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_3W: string;

  /** Suma wartości sprzedaży netto ze stawką obniżoną trzecią w walucie, w której faktura została wystawiona - procedura odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy VAT oraz dla stawki 4% w przypadku ryczałtu dla taksówek osobowych. W przypadku faktur zaliczkowych, kwota zaliczki netto */
  P_13_4: string;

  /** Kwota "0" dla procedury odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy VAT oraz kwota podatku od sumy wartości sprzedaży netto dla stawki 4% w walucie, w której faktura została wystawiona w przypadku ryczałtu dla taksówek osobowych. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_4: string;

  /** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota "0" dla procedury odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy VAT oraz kwota podatku od sumy wartości sprzedaży netto w walucie obcej dla stawki 4% w przypadku ryczałtu dla taksówek osobowych, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy */
  P_14_4W: string;

  /** Suma wartości sprzedaży netto dla transakcji dostawy towarów oraz świadczenia usług poza terytorium kraju. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 oraz ust. 4 pkt 1, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy */
  P_13_5: string;

  /** Suma wartości sprzedaży netto ze stawką 0%. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy */
  P_13_6: string;

  /** Suma wartości sprzedaży zwolnionej. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pola opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy */
  P_13_7: string;

  /** Kwota należności ogółem lub w przypadku faktur zaliczkowych, otrzymana kwota zapłaty */
  P_15: string;

  /** W przypadku dostawy towarów lub świadczenia usług, w odniesieniu do których obowiązek podatkowy powstaje zgodnie z art. 19a ust. 5 pkt 1 lub art. 21 ust. 1 - wyrazy "metoda kasowa", należy podać wartość "true"; w przeciwnym przypadku - wartość "false" */
  P_16: string;

  /** W przypadku faktur, o których mowa w art. 106d ust. 1 - wyraz "samofakturowanie", należy podać wartość "true"; w przeciwnym przypadku - wartość "false" */
  P_17: string;

  /** W przypadku dostawy towarów lub wykonania usługi, dla których obowiązanym do rozliczenia podatku od wartości dodanej lub podatku o podobnym charakterze jest nabywca towaru lub usługi - wyrazy "odwrotne obciążenie", należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_18: string;

  /** W przypadku faktur, w których kwota należności ogółem stanowi kwotę, o której mowa w art. 19 pkt 2 ustawy z dnia 6 marca 2018 r. - Prawo przedsiębiorców, obejmujących dokonaną na rzecz podatnika dostawę towarów lub świadczenie usług wymienionych w załączniku nr 15 do ustawy - wyrazy „mechanizm podzielonej płatności”, należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_18A: string;

  /** W przypadku dostawy towarów lub świadczenia usług zwolnionych od podatku na podstawie art. 43 ust. 1, art. 113 ust. 1 i 9 albo przepisów wydanych na podstawie art. 82 ust. 3 należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_19: string;

  /** Jeśli pole P_19 równa się "true" - należy wskazać przepis ustawy albo aktu wydanego na podstawie ustawy, na podstawie którego podatnik stosuje zwolnienie od podatku */
  P_19A: string;

  /** Jeśli pole P_19 równa się "true" - należy wskazać przepis dyrektywy 2006/112/WE, który zwalnia od podatku taką dostawę towarów lub takie świadczenie usług */
  P_19B: string;

  /** Jeśli pole P_19 równa się "true" - należy wskazać inną podstawę prawną wskazującą na to, że dostawa towarów lub świadczenie usług korzysta ze zwolnienia */
  P_19C: string;

  /** W przypadku, o którym mowa w art. 106c ustawy należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_20: string;

  /** Jeśli pole P_20 równa się "true" - należy podać nazwę organu egzekucyjnego lub imię i nazwisko komornika sądowego */
  P_20A: string;

  /** Jeśli pole P_20 równa się "true" - należy podać adres organu egzekucyjnego lub komornika sądowego */
  P_20B: string;

  /** W przypadku faktur wystawianych w imieniu i na rzecz podatnika przez jego przedstawiciela podatkowego należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_21: string;

  /** Jeśli pole P_21 równa się "true" - należy podać nazwę lub imię i nazwisko przedstawiciela podatkowego */
  P_21A: string;

  /** Jeśli pole P_21 równa się "true" - należy podać adres przedstawiciela podatkowego */
  P_21B: string;

  /** Jeśli pole P_21 równa się "true" - należy podać numer przedstawiciela podatkowego, za pomocą którego jest on zidentyfikowany na potrzeby podatku */
  P_21C: string;

  /** W przypadku gdy przedmiotem wewnątrzwspólnotowej dostawy są nowe środki transportu należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_22: string;

  /** Jeśli pole P_22 równa się "true" - należy podać datę dopuszczenia nowego środka transportu do użytku */
  P_22A: string;

  /** Jeśli pole P_22 równa się "true" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - należy podać przebieg pojazdu */
  P_22B: string;

  /** Jeśli pole P_22 równa się "true" a dostawa dotyczy jednostek pływających, o których mowa w art. 2 pkt 10 lit. b ustawy, oraz statków powietrznych, o których mowa w art. 2 pkt 10 lit. c ustawy, należy podać liczbę godzin roboczych używania nowego środka transportu */
  P_22C: string;

  /** W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2, zawierającej adnotację, o której mowa w art. 136 ust. 1 pkt 1 i stwierdzenie, o którym mowa w art. 136 ust. 1 pkt 2 ustawy należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_23: string;

  /** W przypadku świadczenia usług turystyki, dla których podstawę opodatkowania stanowi zgodnie z art. 119 ust. 1 kwota marży, faktura - w zakresie danych określonych w ust. 1 pkt 1-17 - powinna zawierać wyłącznie dane określone w ust. 1 pkt 1-8 i 15-17, a także wyrazy "procedura marży dla biur podróży", należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_106E_2: string;

  /** W przypadku dostawy towarów używanych, dzieł sztuki, przedmiotów kolekcjonerskich i antyków, dla których podstawę opodatkowania stanowi zgodnie z art. 120 ust. 4 i 5 marża, należy podać wartość "true", w przeciwnym przypadku - wartość "false" */
  P_106E_3: string;

  /** Jeżeli pole P_106E_3 równa się "true", należy podać wyrazy: "procedura marży - towary używane" lub "procedura marży - dzieła sztuki" lub "procedura marży - przedmioty kolekcjonerskie i antyki" */
  P_106E_3A: string;

  /** Rodzaj faktury */
  RodzajFaktury: string;

  /** Invoice rows */
  rows: IJpkFaInvoiceRow[];
}

/** JPK FA Report */
export interface IJpkFaReport {
  invoices: IJpkFaInvoice[];
}
