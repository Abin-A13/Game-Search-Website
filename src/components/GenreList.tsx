import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  onSelectedGenre:(genre:Genre)=>void
}

const GenreList = ({onSelectedGenre}:Props) => {
  const { data, isloading, error } = useGenre();
  if (error) return null;
  // if (isloading) return <Spinner />;
  if (isloading) return <GenreListSkeleton />;
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button onClick={()=>onSelectedGenre(g)} fontSize="lg">{g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
