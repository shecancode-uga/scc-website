"use client";

import Image from 'next/image';
import logo from '../assets/Logo.png';
import Link from 'next/link';

export default function Navbar() { 
    (
        <Image 
                src={logo}
                alt='logo'
                className='h-24 w-auto'
                priority/>
    );

};
