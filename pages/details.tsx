import { Box } from "@chakra-ui/layout";
import React from "react";

import KpirView from "../components/KpirView";
import { IJpkPkpirReport } from "../interfaces/IJpkPkpir";
import { IReport } from "../interfaces/IReport";

const Details = () => {
  return (

    <Box>
      {
        // {
          // JPK_PKPIR: <KpirView data={data as IReport<IJpkPkpirReport>} setData={setLoadedFiles} />,
          // JPK_FA: <FaView data={data as IReport<IJpkFaReport>} setData={setData} />,
          // JPK_VAT: <VatView data={data as IReport<IJpkVatReport>} setData={setData} />,
        // }[loadedFiles[0].code]
      }
    </Box>
  )
};

export default Details;
