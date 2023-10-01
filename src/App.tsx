import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchValue: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // greater than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "270px 1fr",
      }}
    >
      <GridItem area="nav" paddingY={4}>
        <NavBar
          onSearch={(searchValue) =>
            setGameQuery((prevGameQuery) => ({
              ...prevGameQuery,
              searchValue,
            }))
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={6}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery((prevGameQuery) => ({
                ...prevGameQuery,
                genre,
              }))
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={4}>
          <Box marginRight={4}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery((prevGameQuery) => ({
                  ...prevGameQuery,
                  platform,
                }))
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery((prevGameQuery) => ({
                ...prevGameQuery,
                sortOrder,
              }))
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
