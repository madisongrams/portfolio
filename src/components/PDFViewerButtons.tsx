import { useCallback } from "react";

import { Button, HStack, Text } from "@chakra-ui/react";

import "../static/pdf-viewer.css";

type PDFViewButtonsProps = {
  pageNumber: number;
  numPages: number;
  changePage: (arg0: number) => void;
};

export default function PDFViewButtons({
  pageNumber,
  numPages,
  changePage,
}: PDFViewButtonsProps) {
  const previousPage = useCallback(() => changePage(-1), [changePage]);
  const nextPage = useCallback(() => changePage(1), [changePage]);

  const curPageNumber = pageNumber || 1;
  const numPagesString = numPages || "--";

  return (
    <HStack
      className="page-controls"
      position="absolute"
      bottom="5%"
      maxWidth={"100%"}
      marginTop={"1em"}
      left="50%"
      zIndex={99999}
      transform="translateX(-50%)"
      transition="opacity ease-in-out 0.2s"
      borderRadius="10px"
      opacity={0}
      bgColor={"purple.200"}
      color="purple.600"
      fontSize={"sm"}
    >
      <Button
        color="purple.600"
        colorScheme="purple"
        isDisabled={curPageNumber <= 1}
        onClick={previousPage}
      >
        {"<"}
      </Button>
      <Text color="purple.600">{`${
        curPageNumber || numPagesString
      } of ${numPagesString}`}</Text>
      <Button
        color="purple.600"
        colorScheme="purple"
        isDisabled={curPageNumber >= (numPages || 0)}
        onClick={nextPage}
      >
        {">"}
      </Button>
    </HStack>
  );
}
