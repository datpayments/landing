import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize="2xl"
            fontWeight={700}
            lineHeight="32px"
            background="linear-gradient(270deg, #DB2777 0%, #6D28D9 100%)"
            sx={{
                display: "inline",
                textFillColor: "transparent",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            }}
        >
            Dat Payments
        </Text>
    );
}
