import { extendTheme } from "@chakra-ui/react";
import { RadioButtonGroup } from "../../node_modules/@chakra-ui/core/dist/index";

export const theme = extendTheme({
  colors: {
    gray: {},
  },
  fonts: {
    heading: "roboto",
    body: "roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
