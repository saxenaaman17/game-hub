import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      {data.map((genre) => (
        <List key={genre.id} spacing={3}>
          <ListItem paddingY="4px">
            <HStack spacing={4}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius="6px"
                objectFit="cover"
                alt="genre icon"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default GenreList;
