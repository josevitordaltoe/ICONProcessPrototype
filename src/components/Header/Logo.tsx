import { Text, Icon } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      ICON
      <Text color="red.500" as="span">
        MAQ
      </Text>
    </Text>
  );
}
