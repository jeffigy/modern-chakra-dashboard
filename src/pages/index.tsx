import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";

export default function Home() {
  return (
    <CustomCard variant="yellow">
      <Text>the quick brown fox jumps over the lazy dog</Text>
    </CustomCard>
  );
}
