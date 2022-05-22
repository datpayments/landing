import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

export function Navbar() {
    return (
        <Flex justifyContent="space-between" alignItems="center" py={4}>
            <Container maxWidth="container.xl">
                <Flex justifyContent="space-between" alignItems="center">

                <Logo />
                <Box>
                    <Link mr="8">Simple Platform</Link>
                    <Link mr="8">Pricing</Link>
                    <Link mr="8">Documentation</Link>
                    <Button colorScheme="primary" fontWeight="normal">Log In</Button>
                </Box>
                </Flex>
            </Container>
        </Flex>
    );
}
