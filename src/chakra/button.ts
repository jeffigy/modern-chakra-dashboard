import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    bg: "brand.300",
  },
  variants: {
    solid: {
      color: "brand.100",
      bg: "brand.300",
      _hover: {
        bg: "blue.400",
      },
    },
  },
};
