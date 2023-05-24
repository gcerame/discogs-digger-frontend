import { motion } from 'framer-motion';
export function Header () {
    return (
        <motion.div animate={{
            x: [-1000, 0],
            opacity: [0, 1],

        }}>
            <div className="flex align-center justify-center px-4 py-6 font-normal">
                <h1 className="text-5xl text-shadow ">
                    <span className="text-neutral-700">discogs</span>digger
                </h1>
            </div>
        </motion.div>
    );
}
