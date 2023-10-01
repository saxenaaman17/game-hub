import { useCallback } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { debounce } from "lodash";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const debouncedOnChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    500
  );

  const handleDebouncedOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debouncedOnChange(event);
    },
    []
  );

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        placeholder="Search games..."
        borderRadius={20}
        variant="filled"
        onChange={handleDebouncedOnChange}
      />
    </InputGroup>
  );
};

export default SearchInput;
