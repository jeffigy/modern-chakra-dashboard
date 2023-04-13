import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

type ProfileAvatarProps = {};

const ProfileAvatar: React.FC<ProfileAvatarProps> = () => {
  return (
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
  );
};
export default ProfileAvatar;
