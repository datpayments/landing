import { Box, Container, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Feature } from "../Feature/Feature";

const features = [
    "Accept payments in a couple of clicks\nwithout writing a single line of code",
    "Create payment pages\nthrough REST requests or libraries",
    "Forgot KYC, AML, Verifications,\nCompany Registration and other useless papers works...",
    "Coverage all contries",
] as const;

export function Features() {
    return (
        <Container
            maxWidth="container.xl"
            py="36"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <SimpleGrid columns={2} spacing={6} width="100%">
                <Box>
                    <Text
                        fontSize="32px"
                        fontStyle="normal"
                        lineHeight="52px"
                        fontWeight="semibold"
                        mb={12}
                    >
                        Simple platform
                        <br /> With simple solutions
                    </Text>
                    <SimpleGrid columns={2} spacing={6}>
                        <Feature title="No Code" description={features[0]} />
                        <Feature
                            title="API Integration"
                            description={features[1]}
                        />
                        <Feature
                            title="Whitout papers"
                            description={features[2]}
                        />
                        <Feature
                            title="Work everywhere"
                            description={features[3]}
                        />
                    </SimpleGrid>
                </Box>
                <Box>Example code</Box>
            </SimpleGrid>
        </Container>
    );
}
