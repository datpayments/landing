import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/300.css";

import { FormLabel } from "./components/formLabel";
import { Button } from "./components/button";

const newTheme = {
    colors: {
        primary: {
            900: "#111827",
            800: "#1F2937",
            700: "#374151",
            600: "#4B5563",
            500: "#6B7280",
            400: "#9CA3AF",
            300: "#D1D5DB",
            200: "#E5E7EB",
            100: "#F3F4F6",
        },
    },
    fonts: {
        body: "Inter",
    },
    components: {
        Button,
        FormLabel
    },
    config: {
        initialColorMode: 'light',
        // useSystemColorMode: false
    }
};

export const theme = extendTheme(
    newTheme,
    withDefaultColorScheme({ colorScheme: "primary" })
);
