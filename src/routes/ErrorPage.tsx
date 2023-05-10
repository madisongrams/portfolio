import {
  AbsoluteCenter,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <Container centerContent height="100vh" fontSize="xl" marginTop="20">
      <Heading as="h1" size="4xl" marginBottom={"10"}>
        Oops!
      </Heading>
      <Text color="purple.100"> Sorry, an unexpected error has occurred.</Text>
      <Text as="i">
        {isRouteErrorResponse(error)
          ? // note that error is type `ErrorResponse`
            error.error?.message || error.statusText
          : "Unknown error message"}
      </Text>
    </Container>
  );
}
