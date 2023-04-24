import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href={"/"} className='w-16 h-16 bg-dark text-light flex items-center justify-center 
            rounded-full text-2x1 font-bold'
                whileHover={{
                    backgroundColor: ["#121212", "#3B769C", "rgba(252,176,69,1)", "#3B769C", "#121212"],
                    transition: { duration: 1, repeat: Infinity }
                }}>RP</MotionLink>
        </div>
    )
}

export default Logo;