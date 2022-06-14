import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { UseSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "../Header/Logo";
import NotificationsNav from "../Header/NotificationsNav";
import Profile from "../Header/Profile";
import SearchBox from "../Header/SearchBox";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
  const { onOpen } = UseSidebarDrawer();
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWide && (
        <IconButton
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWide && <SearchBox />}

      <NotificationsNav />

      <Profile showProfileData={isWide} />
    </Flex>
  );
}
