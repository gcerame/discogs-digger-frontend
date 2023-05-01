import { motion } from 'framer-motion';
export function Header () {
    return (
        <motion.div animate={{
            x: [-1000, 0],
            opacity: [0, 1],

        }}>
            <div className="flex align-center justify-center px-4 py-6   ">
                <h1 className="text-5xl text-shadow ">
          discogs<span className="text-neutral-700">digger</span>
                </h1>
            </div>
        </motion.div>
    );
}
