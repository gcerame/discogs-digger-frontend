import * as Collapsible from '@radix-ui/react-collapsible';
import Button from "./button";
import { motion } from "framer-motion";


export default function ReleaseTracklist ({ release }) {
    return (
        <div className="backdrop-blur-xl bg-neutral-500 items-center justify-center noise text-center">
            <Collapsible.Root>
                <Collapsible.Trigger className="text-center"><Button text="Tracklist"/></Collapsible.Trigger>
                {release.trackList?.map((track, index) => {
                    return (
                        <Collapsible.Content className="CollapsibleContent" key={index}>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <p key={index} className="text-center p-2 capitalize max-w-xl text-neutral-100">
                                    {track.position} {track.title}
                                </p>
                            </motion.div>
                        </Collapsible.Content>

                    )
                })}
            </Collapsible.Root>
        </div>
    )
}