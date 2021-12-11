/** JPK PKPIR Report row */
export interface IJpkPkpirRow {
  /** Lp. */
  K_1: string;

  /** Data zdarzenia gospodarczego */
  K_2: string;

  /** Nr dowodu księgowego */
  K_3: string;

  /** Kontrahent - imię i nazwisko (firma) */
  K_4: string;

  /** Kontrahent- adres */
  K_5: string;

  /** Opis zdarzenia gospodarczego */
  K_6: string;

  /** Przychód - wartość sprzedanych towarów i usług */
  K_7: string;

  /** Przychód - pozostałe przychody */
  K_8: string;

  /** Przychód - razem przychód (7+8) */
  K_9: string;

  /** Zakup towarów handlowych i materiałów wg cen zakupu */
  K_10: string;

  /** Koszty uboczne zakupu */
  K_11: string;

  /** Wydatki (koszty) - wynagrodzenia w gotówce i w naturze */
  K_12: string;

  /** Wydatki (koszty) - pozostałe wydatki */
  K_13: string;

  /** Wydatki (koszty) - razem wydatki (12+13) */
  K_14: string;

  /** Wydatki (koszty) - pole wolne */
  K_15: string;

  /** Uwagi */
  K_16: string;
}

/** JPK PKPIR Report */
export interface IJpkPkpirReport {
  rows: IJpkPkpirRow[];
}
