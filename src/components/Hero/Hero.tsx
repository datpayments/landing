import { Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Form } from "../Form/Form";
import { Plate } from "../Plate/Plate";
import { ServiceUnavailable } from "../ServiceUnavailable/ServiceUnavailable";

const Animated = styled.span`
    background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;

    animation: color-change 10s ease-in-out infinite;

    @keyframes color-change {
        0% {
            background-position: 0px 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0px 50%;
        }
    }
`;

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
            <Text fontSize="5xl" fontWeight="800" lineHeight="">
                Accept <Animated>crypto payments</Animated>
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
