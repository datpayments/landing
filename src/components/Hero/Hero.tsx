import { Container, Flex, Text } from "@chakra-ui/react";
import { Form } from "../Form/Form";

export function Hero() {
    return (
        <Container maxWidth="container.xl" py="36">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="4xl" fontWeight="light" lineHeight="50px">
                Accept crypto payments
                <br />
                for your products right now
            </Text>
            <Form />
          </Flex>
        </Container>
    );
}
