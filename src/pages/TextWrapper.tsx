import React from 'react';
import { Box } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

function TextWrapper({ text }: { text: string }) {
    const {t} = useTranslation();

  return (
    <Box m={10}>
        {t(text)}
    </Box>
  );
}

export default TextWrapper;
