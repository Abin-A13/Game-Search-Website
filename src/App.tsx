import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null);
  const [seletedPlatform, setSeletedPlatform] = useState<Platform | null>(null);

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
          <GenreList
            sel_id={seletedGenre?.id}
            onSelectedGenre={(genre) => setSeletedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={seletedPlatform} onPalformSelector={(platform)=>setSeletedPlatform(platform)} />
        <GamesGrid selectedplatform={seletedPlatform} selectedgenre={seletedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
