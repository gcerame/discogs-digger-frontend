import { Button, Flex, Input } from "@chakra-ui/react";

export default function SearchForm ({ handleSubmit }) {
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <Flex wrap="wrap" justify="center">
                    <Input minW={175} maxW={200} size="sm" placeholder="Style"
                        id="style"
                        name="style"
                        aria-label="style"/>
                    <Input minW={175} maxW={200} size="sm" placeholder="Year"
                        id="year"
                        name="year"
                        aria-label="year"/>
                    <Input minW={175} maxW={200} size="sm" placeholder="Label"
                        id="label"
                        name="label"
                        aria-label="label"/>
                    <Input minW={175} maxW={200} size="sm" placeholder="Country"
                        id="country"
                        name="country"
                        aria-label="country"/>
                    <Input minW={175} maxW={200} size="sm" placeholder="Artist"
                        id="artist"
                        name="artist"
                        aria-label="artist"/>
                    <Input minW={175} maxW={200} size="sm" placeholder="Page"
                        id="page"
                        name="page"
                        aria-label="page"/>
                    <Button type="submit">Search</Button></Flex>

            </form>
        </div>

    )
}
