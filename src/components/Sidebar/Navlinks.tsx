import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

type NavlinksProps = {};

const Navlinks: React.FC<NavlinksProps> = () => {
  return (
    <Flex
      color={"brand.600"}
      align={"center"}
      p={"15px"}
      mx={"30px"}
      borderRadius={"lg"}
      justifyContent={"center"}
      _hover={{
        bg: "blue.700",
      }}
    >
      <Icon as={SettingsIcon} mr={"15px"} />
      <Text>nav title</Text>
    </Flex>
  );
};
export default Navlinks;
