import axios from "axios";

const validateSignature = async (file: File) => {
  return new Promise(async (resolve) => {
    const bufferReader = new FileReader();
    bufferReader.readAsDataURL(file);
    bufferReader.onload = async (readerEvent) => {
      const bytes = (readerEvent.target.result as string).split(',')[1];
      try {
        const { data } = await axios.post('http://139.59.155.205:8080/services/rest/validation/validateSignature', {
          signedDocument: {
            bytes,
            digestAlgorithm: null,
            name: file.name,
          },
          tokenExtractionStrategy: 'NONE',
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { Signature: signature } = data.DetailedReport.signatureOrTimestampOrCertificate[0];
        const basicBuildingBlocks = data.DetailedReport.BasicBuildingBlocks;
        const analysis = data.DetailedReport.TLAnalysis;

        const getData = block => block ? ({
          title: block.Title,
          constraint: block.Constraint.map(c => ({
            value: c.Name.value,
            status: c.Status,
            message: c.Info?.value || c.Warning?.value || c.Error?.value,
          })),
          status: block.Conclusion.Indication,
        }) : null;

        const verifiedData = [
          {
            name: 'Signature',
            blocks: [
              getData(signature.ValidationProcessBasicSignature),
              getData(signature.ValidationProcessLongTermData),
              getData(signature.ValidationProcessArchivalData),
              {
                ...getData(signature.ValidationSignatureQualification),
                blocks: signature.ValidationSignatureQualification.ValidationCertificateQualification.map(block => getData(block)),
              }
            ]
          },
          ...basicBuildingBlocks.map(basicBuildingBlock => ({
            name: 'Basic Building Blocks',
            blocks: [
              getData(basicBuildingBlock.CV),
              getData(basicBuildingBlock.FC),
              getData(basicBuildingBlock.ISC),
              getData(basicBuildingBlock.PCV),
              getData(basicBuildingBlock.PSV),
              getData(basicBuildingBlock.SAV),
              getData(basicBuildingBlock.VCI),
              getData(basicBuildingBlock.VTS),
              {
                ...getData(basicBuildingBlock.XCV),
                blocks: basicBuildingBlock.XCV?.SubXCV.map(subXCV => ({
                  ...getData(subXCV),
                  blocks: [
                    ...subXCV.RAC.map(RAC => getData(RAC)),
                    getData(subXCV.RFC),
                  ].filter(Boolean),
                })),
              },
            ].filter(Boolean),
          })),
          ...analysis.map(analyse => getData(analyse))
        ];

        resolve({
          isSigned: !!signature,
          verifiedData,
        });
      } catch (e) {
        resolve({
          isSigned: false,
        });
      }
    };
  });
};

export default validateSignature;
