import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import ReleaseVideos from "./releaseVideos";
import {Container, Heading} from "@chakra-ui/react";

export default function Release ({ release }) {

    return (
        <Container className="release" bg='gray.400' color='white' padding={4} border="1px" borderRadius="10px">
            <Heading>{release.title}</Heading>
            <p>{release.year}</p>
            {release.image && <Image src={release.image} width={50} height={50} objectFit="none" alt="release cover"/>}
            {release.videos && <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>}
        </Container>
    );
}




