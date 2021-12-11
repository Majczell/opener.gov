import { getValue } from "./helpers";

const parseKpir = jpk => {

  const rows = jpk.PKPIRWiersz.map(row => ({
    no: getValue(row, 'K_1'),
    date: getValue(row, 'K_2'),
    number: getValue(row, 'K_3'),
    contractorName: getValue(row, 'K_4'),
    contractorAddress: getValue(row, 'K_5'),
    description: getValue(row, 'K_6'),
    goodsAndServicesIncome: getValue(row, 'K_7'),
    otherIncome: getValue(row, 'K_8'),
    totalIncome: getValue(row, 'K_9'),
    goodsCost: getValue(row, 'K_10'),
    sideCost: getValue(row, 'K_11'),
    salaryCost: getValue(row, 'K_12'),
    otherCost: getValue(row, 'K_13'),
    totalCost: getValue(row, 'K_14'),
  }));

  return { rows };
};

export default parseKpir;
