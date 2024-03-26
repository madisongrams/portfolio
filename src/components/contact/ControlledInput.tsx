import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { InputProps } from "./ContactFormInputs";

interface Props {
  inputProps: InputProps;
  submittingMessage?: boolean;
}

const placeholderStyle = { color: "inherit", opacity: 0.6 };

export default function ControlledInput({
  inputProps,
  submittingMessage,
}: Props) {
  const [value, setValue] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setValue(event.target.value);

  useEffect(() => {
    if (submittingMessage) {
      setValue("");
    }
  }, [submittingMessage]);

  const focusBorderColor = useColorModeValue("purple.500", "purple.300");
  const ElementIcon = inputProps.icon;

  return (
    <FormControl isRequired isDisabled={submittingMessage}>
      <FormLabel>{inputProps.label}</FormLabel>

      {inputProps.rows ? (
        <Textarea
          name={inputProps.name}
          placeholder={inputProps.placeholder}
          rows={inputProps.rows}
          resize="none"
          focusBorderColor={focusBorderColor}
          _placeholder={placeholderStyle}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <InputGroup>
          {ElementIcon && <InputLeftElement>{ElementIcon}</InputLeftElement>}
          <Input
            focusBorderColor={focusBorderColor}
            type={inputProps.type}
            name={inputProps.name}
            placeholder={inputProps.placeholder}
            _placeholder={placeholderStyle}
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      )}
    </FormControl>
  );
}

ControlledInput.defaultProps = {
  submittingMessage: false,
};
