import React from "react";
import { Avatar, Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
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
    >
      <Flex h={"80px"} align={"center"} justifyContent={"center"}>
        <Text color={"white"}>Name here</Text>
      </Flex>
      <Flex
        direction={"column"}
        align={"center"}
        border={"1px solid green"}
        h={60}
        justifyContent={"center"}
      >
        <Avatar size={"xl"} mb={"10px"} name="user" />
        <Text color={"white"} mb={"10px"}>
          Louis Carter
        </Text>
        <Button size={"xs"} variant={"secondaryOutline"}>
          Edit
        </Button>
      </Flex>
    </Box>
  );
};
export default Sidebar;
