import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

type CustomCardProps = {
  children: React.ReactNode;
  variant: "yellow" | "darkGray" | "lightGray" | "white";
};

function getCardStyles(variant: CustomCardProps["variant"]) {
  let bg = "";
  let color = "";

  switch (variant) {
    case "yellow":
      bg = "brand.300";
      color = "brand.100";
      break;
    case "darkGray":
      bg = "brand.500";
      color = "brand.300";
      break;
    case "lightGray":
      bg = "brand.200";
      color = "brand.500";
      break;
    default:
      bg = "white";
      color = "";
  }

  return { bg, color };
}

const CustomCard: React.FC<CustomCardProps> = ({ variant, children }) => {
  const { bg, color } = getCardStyles(variant);
  return (
    <Card bg={bg} color={color} shadow={"none"}>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
export default CustomCard;
