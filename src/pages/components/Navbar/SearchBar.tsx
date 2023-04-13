import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents={"none"}
          children={<SearchIcon color="brand.600" />}
        />
        <Input
          variant={"outline"}
          placeholder="Seach something..."
          border={"none"}
          color={"brand.600"}
          _placeholder={{ color: "gray.600" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "brand.600",
          }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchBar;
