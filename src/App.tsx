import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectedGenre={(genre)=>setSeletedGenre(genre)}  />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid selectedgenre={seletedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
