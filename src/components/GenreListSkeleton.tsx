import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <List>
      {skeletons.map((id) => (
        <ListItem key={id} paddingY="4px">
          <HStack spacing={4}>
            <Skeleton boxSize="32px" borderRadius="6px" />
            <SkeletonText noOfLines={1} width="100px" skeletonHeight="4" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
