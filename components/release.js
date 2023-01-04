import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Release ({ release }) {

    return (
        <div className="bg-slate-300 p-8 border-1 border-black">
            <div className="flex flex-col"  gap={6} flexDirection="column">
                <span className="italic text-xl">{release.title}</span>
                <span className="text-lg">{release.artists[0].name}</span>
                <p>Want: {release.want} Have: {release.have}</p>
                <p>For sale: {release.forSale}</p>
                <Link href={release.discogsURL}>Go to discogs</Link>
                <p>{release.year}</p>
                <Spacer/>


            </div>
            {release.image &&
                <Image src={release.image} width="100%" height="80%" objectFit="none" alt="release cover"/>}
            <Spacer/>

            {release.videos ?
                <Container w="100%"><ReleaseVideos videos={release.videos} releaseTitle={release.title}/></Container>
                :
                <p>There are no videos for this release.</p>
            }
        </div>
    );
}




