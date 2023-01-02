/*
    TODO:
        - Show wants/haves, for sale and avg price
 */

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function ReleaseVideos ({ videos, releaseTitle }) {

    return (
        <Tabs size="sm" isLazy>
            <TabList>
                {videos?.map((video, index) => {
                    return (
                        <Tab key={index}>{index + 1}</Tab>
                    );
                })}
            </TabList>

            <TabPanels>
                {videos?.map((video) => {
                    const videoID = video.uri.split('v=').pop();
                    return (
                        <TabPanel key={videoID} w="70%">
                            <Box padding={2} w="100%">
                                <LiteYouTubeEmbed id={videoID}
                                    key={videoID}
                                    title={releaseTitle}/>
                            </Box>
                        </TabPanel>

                    );
                })}

            </TabPanels>
        </Tabs>


    );
}
