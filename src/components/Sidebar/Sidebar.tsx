import React from "react";
import { Avatar, Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import ProfileAvatar from "./ProfileAvatar";
import Navlinks from "./Navlinks";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      borderRight={"1px"}
      borderRightColor={"gray.700"}
      h={"full"}
      w={60}
      pos={"fixed"}
      display={{ base: "none", md: "block" }}
    >
      <Flex h={"80px"} align={"center"} justifyContent={"center"}>
        <Text color={"white"}>Name here</Text>
      </Flex>
      <ProfileAvatar />
      <Navlinks />
    </Box>
  );
};
export default Sidebar;
