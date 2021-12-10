const parseKpir = jpk => {

  const rows = jpk.PKPIRWiersz.map(row => ({
    no: row.K_1[0],
    date: row.K_2[0],
    number: row.K_3[0],
    contractorName: row.K_4[0],
    contractorAddress: row.K_5[0],
    description: row.K_6[0],
    goodsAndServicesIncome: row.K_7[0],
    otherIncome: row.K_8[0],
    totalIncome: row.K_9[0],
    goodsCost: row.K_10[0],
    sideCost: row.K_11[0],
    salaryCost: row.K_12[0],
    otherCost: row.K_13[0],
    totalCost: row.K_14[0],
  }));

  return { rows };
};

export default parseKpir;
