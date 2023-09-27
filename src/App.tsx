import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // greater than 1024px
      }}
    >
      <GridItem area="nav" bg="lightblue">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="lightgreen">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightgrey">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
