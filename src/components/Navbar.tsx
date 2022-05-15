import { Flex } from "@chakra-ui/react";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Navbar() {
    return (
        <Flex justifyContent="space-between" alignItems="center" py={4}>
            <Container>
                <Logo />
            </Container>
        </Flex>
    );
}
