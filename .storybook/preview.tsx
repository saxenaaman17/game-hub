import React, { useEffect } from "react";
import { Preview } from "@storybook/react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import theme from "../src/theme";

// wrapper component to set color mode
const WithChakra = ({ children, colorMode }) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(colorMode);
  }, [colorMode, setColorMode]);

  return children;
};

const preview: Preview = {
  globalTypes: {
    colorMode: {
      name: "Color Mode",
      description: "Color mode (light or dark)",
      defaultValue: "light", // set this based on your theme's default
      toolbar: {
        icon: "mirror",
        items: ["light", "dark"],
        title: "Color Mode",
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Assuming theme object has a 'config' field for 'initialColorMode'
      const { colorMode } = context.globals;

      return (
        <ChakraProvider theme={theme}>
          <WithChakra colorMode={colorMode}>
            <Story />
          </WithChakra>
        </ChakraProvider>
      );
    },
  ],
};

export default preview;
