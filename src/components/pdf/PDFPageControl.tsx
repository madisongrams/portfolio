import { useCallback } from "react";

import { Button, HStack, Text, useColorModeValue } from "@chakra-ui/react";

import "../../static/pdf-viewer.css";

type PDFPageControlProps = {
  pageNumber: number;
  numPages: number;
  changePage: (arg0: number) => void;
};

export default function PDFPageControl({
  pageNumber,
  numPages,
  changePage,
}: PDFPageControlProps) {
  const previousPage = useCallback(() => changePage(-1), [changePage]);
  const nextPage = useCallback(() => changePage(1), [changePage]);

  const curPageNumber = pageNumber || 1;
  const numPagesString = numPages || "--";
  const textColor = useColorModeValue("purple.100", "purple.800");

  return (
    <HStack
      className="page-controls"
      position="absolute"
      bottom="5%"
      maxWidth={"100%"}
      left="50%"
      transform="translateX(-50%)"
      transition="opacity ease-in-out 0.2s"
      borderRadius="10px"
      opacity={0}
      bgColor={useColorModeValue("purple.500", "purple.200")}
      fontSize={"sm"}
    >
      <Button
        colorScheme="purple"
        isDisabled={curPageNumber <= 1}
        onClick={previousPage}
        color={textColor}
      >
        {"<"}
      </Button>
      <Text color={textColor}>{`${
        curPageNumber || numPagesString
      } of ${numPagesString}`}</Text>
      <Button
        colorScheme="purple"
        isDisabled={curPageNumber >= (numPages || 0)}
        onClick={nextPage}
        color={textColor}
      >
        {">"}
      </Button>
    </HStack>
  );
}
