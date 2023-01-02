import { Center, Heading,Text } from "@chakra-ui/react";

export function Header () {
    return (
        <Center>
            <Heading p={4}>
                discogs<Text as="span" color="gray.400">digger</Text>
            </Heading>
        </Center>
    );
}
