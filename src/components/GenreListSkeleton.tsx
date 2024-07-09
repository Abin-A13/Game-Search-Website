import {
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <SkeletonCircle boxSize="32px" />
        <SkeletonText fontSize="lg" />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
