import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import RightButtons from "./RightButtons";
import SearchBar from "./SearchBar";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={"20px"}
      position="sticky"
      top="0"
      height="80px"
      zIndex="1"
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Text fontSize={"25px"} color={"brand.600"}>
        Statistics
      </Text>
      <SearchBar />
      <RightButtons />
    </Flex>
  );
};
export default Navbar;
