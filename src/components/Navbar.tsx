import { Container, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Navbar() {
    return (
        <Flex justifyContent="space-between" alignItems="center" py={4}>
            <Container maxWidth="container.xl">
                <Logo />
            </Container>
        </Flex>
    );
}
