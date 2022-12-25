import { Center, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Center justifyContent="center" alignItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        mt="28"
      />
    </Center>
  );
}

export default Loading;
