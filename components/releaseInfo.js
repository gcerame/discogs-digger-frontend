import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import ReleaseTracklist from "./releaseTracklist";
import React from "react";

export default function ReleaseInfo ({ release }) {
    return (
        <div className="flex flex-col  place-content-around bg-stone-500 p-2 rounded w-full md:w-1/3 self-center noise">
            <div className="flex flex-col place-content-around bg-stone-600 text-center p-2
                rounded w-full self-center">
                {release.image &&
                <div className="aspect-square self-center">
                    <Image src={release.image} width="100" height="100"
                        className="h-auto w-auto shadow-2xl" alt="release cover"/>
                </div>}
                <span className="italic text-xl">{release.title}</span>
                <p>{release.year}</p>
                <span className="text-lg">{release.artists[0].name}</span>
            
            </div>
            <ReleaseTracklist release={release}/>

            <div className="flex flex-col text-center p-2">


                {
                    release.want ? <p>Want: {release.want} Have: {release.have}</p> : null
                }

                <p>For sale: {release.forSale}</p>
                <p>Lowest price on marketplace {release.lowestPrice} €</p>
                <Button className=" bg-stone-800 active:translate-y-1 w-fit p-1 m-1.5 self-center"
                    text={<Link href={release.discogsURL}>discogs↗</Link>}>
                </Button>


            </div>

        </div>
    );
}