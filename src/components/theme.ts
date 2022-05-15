import { DeepPartial, extendTheme, Theme } from "@chakra-ui/react";
import "@fontsource/inter";

const colors = {};

const newTheme: DeepPartial<Theme> = {
    colors,
    fonts: {
        body: "Inter",
    },
};

export const theme = extendTheme(newTheme);
