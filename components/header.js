import { motion } from 'framer-motion';
export function Header () {
    return (
        <motion.div animate={{
            x: [-1000, 0],
            opacity: [0, 1],

        }}>
            <div className="flex align-center justify-center px-4 py-6 font-normal flex-wrap">
                <h1 className="text-4xl text-shadow md:text-5xl ">
                    <span className="text-neutral-800">discogs</span>digger
                </h1>
            </div>
        </motion.div>
    );
}
