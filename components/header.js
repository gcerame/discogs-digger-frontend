import { Center, Heading, Text } from "@chakra-ui/react";

export function Header () {
    return (
        <div className="flex align-center justify-center p-4">
            <h1 className="text-4xl">
                discogs<span className="text-gray-400">digger</span>
            </h1>
        </div>
    );
}
