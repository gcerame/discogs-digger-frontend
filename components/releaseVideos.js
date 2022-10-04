import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function ReleaseVideos ({ videos, releaseTitle }) {

    return (
        <Tabs>
            <TabList>
                {videos?.map((video, index) => {
                    return (
                        <Tab key={index}>Video{index + 1}</Tab>
                    );
                })}
            </TabList>

            <TabPanels>
                {videos?.map((video) => {
                    const videoID = video.uri.split('v=').pop();
                    return (
                        <TabPanel key={videoID}>
                            <Box padding={4}>
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
