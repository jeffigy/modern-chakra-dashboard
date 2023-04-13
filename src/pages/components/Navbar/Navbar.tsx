import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      height="60px"
      zIndex="1"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      // justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      this is the nav bar
      <Button size={"lg"} variant={"primarySolid"}>
        Upgrade
      </Button>
    </Flex>
  );
};
export default Navbar;
