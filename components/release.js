import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Release ({ release }) {

    return (
        <Flex className="release" bg="gray.600" color="white"
            padding={8}
            border="1px"
            gap = {8}
            borderRadius="10px"
            flexDirection="column">
            <Flex  gap={6} flexDirection="column">
                <Spacer/>

                <Heading as="i">{release.title}</Heading>

                <Heading size="md">{release.artists[0].name}</Heading>
                <p>Want: {release.want} Have: {release.have}</p>
                <p>For sale: {release.forSale}</p>
                <Link href={release.discogsURL}>Go to discogs</Link>
                <p>{release.year}</p>
                <Spacer/>


            </Flex>
            {release.image &&
                <Image src={release.image} width="80%" height="80%" objectFit="none" alt="release cover"/>}
            <Spacer/>

            {release.videos ?
                <Container w="100%"><ReleaseVideos videos={release.videos} releaseTitle={release.title}/></Container>
                :
                <p>There are no videos for this release.</p>
            }
        </Flex>
    );
}




