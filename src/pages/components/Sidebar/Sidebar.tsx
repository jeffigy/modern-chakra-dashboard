import React from "react";
import { Box, Button } from "@chakra-ui/react";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      // bg={"blue.900"}
      borderRight={"1px"}
      borderRightColor={"gray.700"}
      h={"full"}
      w={60}
      pos={"fixed"}
      display={{ base: "none", md: "block" }}
    ></Box>
  );
};
export default Sidebar;
