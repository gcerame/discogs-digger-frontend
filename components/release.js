import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import ReleaseVideos from "./releaseVideos";
import { Container, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Release ({ release }) {

    return (
        <Container className="release" bg='gray.400' color='white' padding={4} border="1px" borderRadius="10px">
            <Heading>{release.title}</Heading>
            <Heading size="md">{release.artists[0].name}</Heading>
            <p>Want: {release.want} Have: {release.have}</p>
            <p>For sale: {release.forSale}</p>
            <Link href={release.discogsURL}>Go to discogs</Link>
            <p>{release.year}</p>
            {release.image &&
                <Image src={release.image} width={200} height={200} objectFit="none" alt="release cover"/>}
            {release.videos && <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>}

        </Container>
    );
}




