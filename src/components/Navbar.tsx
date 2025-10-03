"use client";

import Image from 'next/image';
import name from '../assets/name.png';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useState } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setHidden(true);
      } else {
        // scrolling up → show
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
       <nav className={`${styles.nav} ${hidden ? styles.navHidden : ""}`}>
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
