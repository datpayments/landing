import { Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "../Form/Form";
import { Plate } from "../Plate/Plate";
import { ServiceUnavailable } from "../ServiceUnavailable/ServiceUnavailable";

export function Hero() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleSubmit() {
        setFormSubmitted(true);
    }

    return (
        <Container
            maxWidth="container.xl"
            py="36"
            height="800px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text fontSize="4xl" fontWeight="light" lineHeight="50px">
                Accept crypto payments
                <br />
                for your products right now
            </Text>
            <Plate>
                {formSubmitted ? (
                    <ServiceUnavailable />
                ) : (
                    <Form onSubmit={handleSubmit} />
                )}
            </Plate>
        </Container>
    );
}
