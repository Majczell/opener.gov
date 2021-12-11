/** JPK VAT Report row */
export interface IJpkVatDetails {
  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, zwolnionych od podatku */
  P_10: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług poza terytorium kraju */
  P_11: string;

  /** Wysokość podstawy opodatkowania z tytułu świadczenia usług, o których mowa w art. 100 ust. 1 pkt 4 ustawy */
  P_12: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 0% */
  P_13: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów, o której mowa w art. 129 ustawy */
  P_14: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 5%, oraz korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  P_15: string;

  /** Wysokość podatku należnego z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 5%, oraz korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  P_16: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 7% albo 8%, oraz korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  P_17: string;

  /** Wysokość podatku należnego z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 7% albo 8%, oraz korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  P_18: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 22% albo 23%, oraz korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  P_19: string;

  /** Wysokość podatku należnego z tytułu dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 22% albo 23%, oraz korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  P_20: string;

  /** Wysokość podstawy opodatkowania z tytułu wewnątrzwspólnotowej dostawy towarów */
  P_21: string;

  /** Wysokość podstawy opodatkowania z tytułu eksportu towarów */
  P_22: string;

  /** Wysokość podstawy opodatkowania z tytułu wewnątrzwspólnotowego nabycia towarów */
  P_23: string;

  /** Wysokość podatku należnego z tytułu wewnątrzwspólnotowego nabycia towarów */
  P_24: string;

  /** Wysokość podstawy opodatkowania z tytułu importu towarów rozliczanego zgodnie z art. 33a ustawy */
  P_25: string;

  /** Wysokość podatku należnego z tytułu importu towarów rozliczanego zgodnie z art. 33a ustawy */
  P_26: string;

  /** Wysokość podstawy opodatkowania z tytułu importu usług, z wyłączeniem usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  P_27: string;

  /** Wysokość podatku należnego z tytułu importu usług, z wyłączeniem usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  P_28: string;

  /** Wysokość podstawy opodatkowania z tytułu importu usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  P_29: string;

  /** Wysokość podatku należnego z tytułu importu usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  P_30: string;

  /** Wysokość podstawy opodatkowania z tytułu dostawy towarów, dla których podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 5 ustawy */
  P_31: string;

  /** Wysokość podatku należnego z tytułu dostawy towarów, dla których podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 5 ustawy */
  P_32: string;

  /** Wysokość podatku należnego od towarów objętych spisem z natury, o którym mowa w art. 14 ust. 5 ustawy */
  P_33: string;

  /** Wysokość zwrotu odliczonej lub zwróconej kwoty wydanej na zakup kas rejestrujących, o którym mowa w art. 111 ust. 6 ustawy */
  P_34: string;

  /** Wysokość podatku należnego od wewnątrzwspólnotowego nabycia środków transportu, wykazana w wysokości podatku należnego z tytułu określonego w P_24, podlegająca wpłacie w terminie, o którym mowa w art. 103 ust. 3, w związku z ust. 4 ustawy */
  P_35: string;

  /** Wysokość podatku od wewnątrzwspólnotowego nabycia towarów, o których mowa w art. 103 ust. 5aa ustawy, podlegająca wpłacie w terminach, o których mowa w art. 103 ust. 5a i 5b ustawy */
  P_36: string;

  /** Łączna wysokość podstawy opodatkowania. Suma kwot z P_10, P_11, P_13, P_15, P_17, P_19, P_21, P_22, P_23, P_25, P_27, P_29, P_31 */
  P_37: string;

  /** Łączna wysokość podatku należnego. Suma kwot z P_16, P_18, P_20, P_24, P_26, P_28, P_30, P_32, P_33, P_34 pomniejszona o kwotę z P_35 i P_36 */
  P_38: string;

  /** Wysokość nadwyżki podatku naliczonego nad należnym z poprzedniej deklaracji */
  P_39: string;

  /** Wartość netto z tytułu nabycia towarów i usług zaliczanych u podatnika do środków trwałych */
  P_40: string;

  /** Wysokość podatku naliczonego z tytułu nabycia towarów i usług zaliczanych u podatnika do środków trwałych */
  P_41: string;

  /** Wartość netto z tytułu nabycia pozostałych towarów i usług */
  P_42: string;

  /** Wysokość podatku naliczonego z tytułu nabycia pozostałych towarów i usług */
  P_43: string;

  /** Wysokość podatku naliczonego z tytułu korekty podatku naliczonego od nabycia towarów i usług zaliczanych u podatnika do środków trwałych */
  P_44: string;

  /** Wysokość podatku naliczonego z tytułu korekty podatku naliczonego od nabycia pozostałych towarów i usług */
  P_45: string;

  /** Wysokość podatku naliczonego z tytułu korekty podatku naliczonego, o której mowa w art. 89b ust. 1 ustawy */
  P_46: string;

  /** Wysokość podatku naliczonego z tytułu korekty podatku naliczonego, o której mowa w art. 89b ust. 4 ustawy */
  P_47: string;

  /** Łączna wysokość podatku naliczonego do odliczenia. Suma kwot z P_39, P_41, P_43, P_44, P_45, P_46 i P_47 */
  P_48: string;

  /** Kwota wydana na zakup kas rejestrujących, do odliczenia w danym okresie rozliczeniowym pomniejszająca wysokość podatku należnego */
  P_49: string;

  /** Wysokość podatku objęta zaniechaniem poboru */
  P_50: string;

  /** Wysokość podatku podlegająca wpłacie do urzędu skarbowego */
  P_51: string;

  /** Kwota wydana na zakup kas rejestrujących, do odliczenia w danym okresie rozliczeniowym przysługująca do zwrotu w danym okresie rozliczeniowym lub powiększająca wysokość podatku naliczonego do przeniesienia na następny okres rozliczeniowy */
  P_52: string;

  /** Wysokość nadwyżki podatku naliczonego nad należnym */
  P_53: string;

  /** Wysokość nadwyżki podatku naliczonego nad należnym do zwrotu na rachunek wskazany przez podatnika */
  P_54: string;

  /** Zwrot na rachunek rozliczeniowy podatnika w terminie 15 dni: 1 - tak */
  P_540: string;

  /** Zwrot na rachunek VAT podatnika w terminie 25 dni: 1 - tak */
  P_55: string;

  /** Zwrot na rachunek rozliczeniowy podatnika w terminie 25 dni (art. 87 ust. 6 ustawy): 1 - tak */
  P_56: string;

  /** Zwrot na rachunek rozliczeniowy podatnika w terminie 40 dni: 1 - tak */
  P_560: string;

  /** Zwrot na rachunek rozliczeniowy podatnika w terminie 60 dni: 1 - tak */
  P_57: string;

  /** Zwrot na rachunek rozliczeniowy podatnika w terminie 180 dni: 1 - tak */
  P_58: string;

  /** Zaliczenie zwrotu podatku na poczet przyszłych zobowiązań podatkowych: 1 - tak */
  P_59: string;

  /** Wysokość zwrotu do zaliczenia na poczet przyszłych zobowiązań podatkowych */
  P_60: string;

  /** Rodzaj przyszłego zobowiązania podatkowego */
  P_61: string;

  /** Wysokość nadwyżki podatku naliczonego nad należnym do przeniesienia na następny okres rozliczeniowy */
  P_62: string;

  /** Podatnik wykonywał w okresie rozliczeniowym czynności, o których mowa w art. 119 ustawy: 1 - tak */
  P_63: string;

  /** Podatnik wykonywał w okresie rozliczeniowym czynności, o których mowa w art. 120 ust. 4 lub 5 ustawy: 1 - tak */
  P_64: string;

  /** Podatnik wykonywał w okresie rozliczeniowym czynności, o których mowa w art. 122 ustawy: 1 - tak */
  P_65: string;

  /** Podatnik wykonywał w okresie rozliczeniowym czynności, o których mowa w art. 136 ustawy: 1 - tak */
  P_66: string;

  /** Podatnik ułatwiał w okresie rozliczeniowym dokonanie czynności, o których mowa w art. 109b ust. 4 ustawy: 1 - tak */
  P_660: string;

  /** Podatnik korzysta z obniżenia zobowiązania podatkowego, o którym mowa w art. 108d ustawy: 1 - tak */
  P_67: string;

  /** Wysokość korekty podstawy opodatkowania, o której mowa w art. 89a ust. 1 ustawy */
  P_68: string;

  /** Wysokość korekty podatku należnego, o której mowa w art. 89a ust. 1 ustawy */
  P_69: string;

  /** Uzasadnienie przyczyn złożenia korekty */
  P_ORDZU: string;
}

export interface IJpkVatPurchaseRow {
  /** Lp. wiersza ewidencji w zakresie rozliczenia podatku naliczonego */
  LpZakupu: string;

  /** Kod kraju nadania numeru, za pomocą którego dostawca lub usługodawca jest zidentyfikowany na potrzeby podatku lub podatku od wartości dodanej */
  KodKrajuNadaniaTIN: string;

  /** Numer, za pomocą którego dostawca lub usługodawca jest zidentyfikowany na potrzeby podatku lub podatku od wartości dodanej (wyłącznie kod cyfrowo-literowy) */
  NrDostawcy: string;

  /** Imię i nazwisko lub nazwa dostawcy lub usługodawcy */
  NazwaDostawcy: string;

  /** Numer dowodu zakupu */
  DowodZakupu: string;

  /** Data wystawienia dowodu zakupu */
  DataZakupu: string;

  /** Data wpływu dowodu zakupu */
  DataWplywu: string;

  /** Oznaczenie dowodu zakupu */
  DokumentZakupu: string;

  /** Wartość netto wynikająca z nabycia towarów i usług zaliczanych u podatnika do środków trwałych */
  K_40: string;

  /** Wysokość podatku naliczonego przysługująca do odliczenia z podstaw określonych w art. 86 ust. 2 ustawy, na warunkach określonych w ustawie wynikająca z nabycia towarów i usług zaliczanych u podatnika do środków trwałych */
  K_41: string;

  /** Wartość netto wynikająca z nabycia pozostałych towarów i usług */
  K_42: string;

  /** Wysokość podatku naliczonego przysługująca do odliczenia z podstaw określonych w art. 86 ust. 2 ustawy, na warunkach określonych w ustawie wynikająca z nabycia pozostałych towarów i usług */
  K_43: string;

  /** Wysokość podatku naliczonego wynikająca z korekt podatku naliczonego, o których mowa w art. 90a-90c oraz art. 91 ustawy, z tytułu nabycia towarów i usług zaliczanych u podatnika do środków trwałych */
  K_44: string;

  /** Wysokość podatku naliczonego wynikająca z korekt podatku naliczonego, o których mowa w art. 90a-90c oraz art. 91 ustawy, z tytułu nabycia pozostałych towarów i usług */
  K_45: string;

  /** Wysokość podatku naliczonego wynikająca z korekty podatku naliczonego, o której mowa w art. 89b ust. 1 ustawy */
  K_46: string;

  /** Wysokość podatku naliczonego wynikająca z korekty podatku naliczonego, o której mowa w art. 89b ust. 4 ustawy */
  K_47: string;

  /** Kwota nabycia towarów i usług nabytych od innych podatników dla bezpośredniej korzyści turysty, a także nabycia towarów używanych, dzieł sztuki, przedmiotów kolekcjonerskich i antyków związanych ze sprzedażą opodatkowaną na zasadzie marży zgodnie z art. 120 ustawy */
  ZakupVAT_Marza: string;
}

export interface IJpkVatSaleRow {
  /** Lp. wiersza ewidencji w zakresie rozliczenia podatku należnego */
  LpSprzedazy: string;

  /** Kod kraju nadania numeru, za pomocą którego nabywca, dostawca lub usługodawca jest zidentyfikowany na potrzeby podatku lub podatku od wartości dodanej */
  KodKrajuNadaniaTIN: string;

  /** Numer, za pomocą którego nabywca, dostawca lub usługodawca jest zidentyfikowany na potrzeby podatku lub podatku od wartości dodanej (wyłącznie kod cyfrowo-literowy) */
  NrKontrahenta: string;

  /** Imię i nazwisko lub nazwa nabywcy, dostawcy lub usługodawcy */
  NazwaKontrahenta: string;

  /** Numer dowodu */
  DowodSprzedazy: string;

  /** Data wystawienia dowodu */
  DataWystawienia: string;

  /** Data dokonania lub zakończenia dostawy towarów lub wykonania usługi lub data otrzymania zapłaty, o której mowa w art. 106b ust. 1 pkt 4 ustawy, o ile taka data jest określona i różni się od daty wystawienia dowodu. W przeciwnym przypadku - pole puste */
  DataSprzedazy: string;

  /** Oznaczenie dowodu sprzedaży */
  TypDokumentu: string;
  
  /** Oznaczenie dotyczące dostawy towarów i świadczenia usług */
  GTU: string;

  /** Oznaczenia dotyczące procedur */
  Procedura: string;

  /** Korekta podstawy opodatkowania oraz podatku należnego, o której mowa w art. 89a ust. 1 i 4 ustawy */
  KorektaPodstawyOpodt: boolean;

  /** Data upływu terminu płatności w przypadku korekt dokonanych zgodnie z art. 89a ust. 1 ustawy */
  TerminPlatnosci: string;

  /** Data dokonania zapłaty w przypadku korekt dokonanych zgodnie z art. 89a ust. 4 ustawy */
  DataZaplaty: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, zwolnionych od podatku */
  K_10: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów oraz świadczenia usług poza terytorium kraju */
  K_11: string;

  /** Wysokość podstawy opodatkowania wynikająca ze świadczenia usług, o których mowa w art. 100 ust. 1 pkt 4 ustawy */
  K_12: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 0% */
  K_13: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów, o której mowa w art. 129 ustawy */
  K_14: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 5%, z uwzględnieniem korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  K_15: string;

  /** Wysokość podatku należnego wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 5%, z uwzględnieniem korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  K_16: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 7% albo 8%, z uwzględnieniem korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  K_17: string;

  /** Wysokość podatku należnego wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 7% albo 8%, z uwzględnieniem korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  K_18: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 22% albo 23%, z uwzględnieniem korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  K_19: string;

  /** Wysokość podatku należnego wynikająca z dostawy towarów oraz świadczenia usług na terytorium kraju, opodatkowanych stawką 22% albo 23%, z uwzględnieniem korekty dokonanej zgodnie z art. 89a ust. 1 i 4 ustawy */
  K_20: string;

  /** Wysokość podstawy opodatkowania wynikająca z wewnątrzwspólnotowej dostawy towarów, o której mowa w art. 13 ust. 1 i 3 ustawy */
  K_21: string;

  /** Wysokość podstawy opodatkowania wynikająca z eksportu towarów */
  K_22: string;

  /** Wysokość podstawy opodatkowania wynikająca z wewnątrzwspólnotowego nabycia towarów */
  K_23: string;

  /** Wysokość podatku należnego wynikająca z wewnątrzwspólnotowego nabycia towarów */
  K_24: string;

  /** Wysokość podstawy opodatkowania wynikająca z importu towarów rozliczanego zgodnie z art. 33a ustawy, potwierdzona zgłoszeniem celnym lub deklaracją importową, o której mowa w art. 33b ustawy */
  K_25: string;

  /** Wysokość podatku należnego wynikająca z importu towarów rozliczanego zgodnie z art. 33a ustawy, potwierdzona zgłoszeniem celnym lub deklaracją importową, o której mowa w art. 33b ustawy */
  K_26: string;

  /** Wysokość podstawy opodatkowania wynikająca z importu usług, z wyłączeniem usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  K_27: string;

  /** Wysokość podatku należnego wynikająca z importu usług, z wyłączeniem usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  K_28: string;

  /** Wysokość podstawy opodatkowania wynikająca z importu usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  K_29: string;

  /** Wysokość podatku należnego wynikająca z importu usług nabywanych od podatników podatku od wartości dodanej, do których stosuje się art. 28b ustawy */
  K_30: string;

  /** Wysokość podstawy opodatkowania wynikająca z dostawy towarów, dla których podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 5 ustawy */
  K_31: string;

  /** Wysokość podatku należnego wynikająca z dostawy towarów, dla których podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 5 ustawy */
  K_32: string;

  /** Wysokość podatku należnego od towarów objętych spisem z natury, o którym mowa w art. 14 ust. 5 ustawy */
  K_33: string;

  /** Wysokość zwrotu odliczonej lub zwróconej kwoty wydanej na zakup kas rejestrujących, o którym mowa w art. 111 ust. 6 ustawy */
  K_34: string;

  /** Wysokość podatku należnego od wewnątrzwspólnotowego nabycia środków transportu, wykazana w wysokości podatku należnego z tytułu wewnątrzwspólnotowego nabycia towarów, podlegająca wpłacie w terminie, o którym mowa w art. 103 ust. 3, w związku z ust. 4 ustawy */
  K_35: string;

  /** Wysokość podatku należnego od wewnątrzwspólnotowego nabycia towarów, o których mowa w art. 103 ust. 5aa ustawy, podlegająca wpłacie w terminie, o którym mowa w art. 103 ust. 5a i 5b ustawy */
  K_36: string;

  /** Wartość sprzedaży brutto dostawy towarów i świadczenia usług opodatkowanych na zasadach marży zgodnie z art. 119 i art. 120 ustawy */
  SprzedazVAT_Marza: string;
}

/** JPK VAT Report */
export interface IJpkVatReport {
  declarationCode: string;
  details: IJpkVatDetails;
  purchaseRows: IJpkVatPurchaseRow[];
  saleRows: IJpkVatSaleRow[];
}
