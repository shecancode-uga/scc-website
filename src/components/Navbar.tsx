"use client";

import Image from 'next/image';
import name from '../assets/name.png';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.div1}>
                <Link className='cursor-pointer hover:underline' href='/' >
                    Home
                </Link>
                <Link className='cursor-pointer hover:underline' href='/contact' >
                    Contact
                </Link>
                <div className={styles.div2}>
                    <Image
                        src={name}
                        alt='SheCanCode'
                        className='h-24 w-auto'
                        priority />
                </div>
                <Link className='cursor-pointer hover:underline' href='/mentors' >
                    Mentors
                </Link>
                <Link className='cursor-pointer hover:underline' href='/signup' >
                    Sign Up
                </Link>
            </div>
        </nav>
    );

};
