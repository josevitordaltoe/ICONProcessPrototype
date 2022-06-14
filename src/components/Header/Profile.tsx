import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>José Vitor</Text>
          <Text color="gray.300" fontSize="small">
            jose.vitor@iconmaq.com.br
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="José Vitor"
        src="https://github.com/josevitordaltoe.png"
      />
    </Flex>
  );
}
