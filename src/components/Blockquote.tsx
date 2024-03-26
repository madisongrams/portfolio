import { Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  quote: string;
  source: string;
}

export default function Blockquote({ quote, source }: Props) {
  const textColor = useColorModeValue("purple.600", "purple.100");
  const sourceColor = useColorModeValue("purple.600", "purple.300");
  const background = useColorModeValue("purple.100", "purple.900");
  const cssColor = useColorModeValue("#6B46C1", "#B794F4");

  return (
    <Text
      textAlign={"left"}
      color={textColor}
      as={"blockquote"}
      sx={{
        margin: "50px auto",
        fontStyle: "italic",
        padding: "1.2em 30px 1.2em 75px",
        borderLeft: `8px solid ${cssColor}`,
        lineHeight: "1.6",
        position: "relative",
        borderRadius: "5px",
        background,
      }}
      _before={{
        fontFamily: "Arial",
        content: '"\u201C"',
        color: cssColor,
        fontSize: "4em",
        position: "absolute",
        left: "10px",
        top: "-10px",
      }}
      _after={{ content: '""' }}
    >
      {quote}
      <Text
        textAlign="right"
        as="span"
        color={sourceColor}
        sx={{
          display: "block",
          fontStyle: "normal",
          fontWeight: "bold",
          marginTtop: "1em",
        }}
      >
        {source}
      </Text>
    </Text>
  );
}
