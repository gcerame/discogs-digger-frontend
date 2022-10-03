import LiteYouTubeEmbed from "react-lite-youtube-embed";
import {Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

export default function ReleaseVideos ({videos,releaseTitle}) {

    return(
        <Tabs>
            <TabList>
                {videos?.map((video, index)=>{
                    return (
                        <Tab>Video{index+1}</Tab>
                    )
                })}
            </TabList>

            <TabPanels>
                {videos?.map((video) => {
                    return (
                        <TabPanel>
                        <Box padding={4}><LiteYouTubeEmbed id={video.uri.split('v=').pop()}
                                                           key={video.uri}
                                                           title={releaseTitle}/></Box>
                        </TabPanel>

                    );
                })}

            </TabPanels>
        </Tabs>



    )
}
