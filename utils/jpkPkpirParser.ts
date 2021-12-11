import { IJpkPkpirReport } from "../interfaces/IJpkPkpir";
import { parseJpkArray } from "./helpers";

const parseJpkKpir = (jpk): IJpkPkpirReport => {
  const rows = parseJpkArray(jpk.PKPIRWiersz);
  return { rows };
};

export default parseJpkKpir;
