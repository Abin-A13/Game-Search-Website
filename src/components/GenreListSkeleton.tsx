import { List, ListItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const geners = [...Array(10).keys()];
  return (
    <List>
      {geners.map((n) => (
        <ListItem key={n}>
          <SkeletonCircle boxSize="32px" />
          <SkeletonText fontSize="lg" />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
