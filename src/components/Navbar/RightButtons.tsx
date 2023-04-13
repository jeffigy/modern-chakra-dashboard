import { BellIcon } from "@chakra-ui/icons";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import React from "react";

type RightButtonsProps = {};

const RightButtons: React.FC<RightButtonsProps> = () => {
  return (
    <Flex>
      <Button
        mr={"15px"}
        display={{ base: "none", lg: "block" }}
        size={"md"}
        variant={"primarySolid"}
      >
        Upgrade
      </Button>
      <IconButton
        variant={"outline"}
        aria-label="Notification"
        icon={<BellIcon />}
        color={"brand.600"}
        fontSize={"20px"}
        borderColor={"gray.600"}
        // isLoading={true}
      />
    </Flex>
  );
};
export default RightButtons;
