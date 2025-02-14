import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  sel_id: number | undefined;
}

const GenreList = ({ onSelectedGenre, sel_id }: Props) => {
  const { data, isloading, error } = useGenre();
  if (error) return null;
  if (isloading) return <Spinner />;
  // if (isloading) return <GenreListSkeleton />;
  return (
    <><Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              objectFit='cover'
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button
              whiteSpace='normal'
              textAlign='left'
              bgColor={sel_id === g.id ? "green" : " "}
              fontWeight={g.id === sel_id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(g)}
              fontSize="lg"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List></>
  );
};

export default GenreList;
