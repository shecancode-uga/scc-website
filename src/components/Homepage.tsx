"use client";

import Image from 'next/image';
import styles from '@/components/Homepage.module.css';
import styles2 from '@/components/Mentors.module.css';
import img from '@/assets/placeholder.jpg';
import mtg1 from '@/assets/scc_exotec_1.jpeg';
import mtg2 from '@/assets/scc_exotec_2.jpeg'
import Footer from './Footer';

export default function Homepage() {
    return (
        <div>
            <div className={styles2.title}>
                Welcome!
            </div>
            <div className={styles.div2}>
                Our Mission
            </div>
            <div className={styles.text}>
                SheCanCode aims to empower women and non-binary students in Computer Science
                and Technology by building a supportive community, fostering Mentorship,
                and creating opportunities for growth. We aim to provide guidance, promote
                inclusivity, and help our members develop the skills and connections needed to thrive
                in tech.
            </div>
            <div className={styles.img}>
                <Image src={mtg1}
                    alt='placeholder'
                    className='h-auto w-auto'
                    priority />
            </div>
            <div className={styles.div2}>
                Mentorship Program
            </div>
            <div className={styles.text}>
                <ul className={styles.ul}>
                    <li> Matches students with experienced mentors in tech fields.</li>
                    <li>Open to all class years--whether you're just starting out or looking
                        to refine your career path.
                    </li>
                    <li>
                        Provides both career-focused guidance (resume help, internships,
                        job searching) and personal support (navigating college, building confidence).
                    </li>
                    <li>
                        Encourages community-building by connecting students across different years
                        and interests.
                    </li>
                </ul>
            </div>
            <div className={styles.div2}>
                For Mentors
            </div>
            <div className={styles.text}>
                <ul className={styles.ul}>
                    <li> Leadership Growth -- Strengthen your communication
                        and mentorship skills
                    </li>
                    <li>
                        Community Impact -- Foster supportive and inclusive tech culture
                        at UGA
                    </li>
                </ul>
            </div>
            <div className={styles.div2}>
                For Mentees
            </div>
            <div className={styles.text}>
                <ul className={styles.ul}>
                    <li>Personalized Career Readiness -- Resume reviews, interview prep,
                         internship/job search tips tailored to you!
                    </li>
                    <li>
                        Connections that Last -- Professional relationships and friendships
                        extending beyond college!
                    </li>
                </ul>
            </div>
            <div className={styles.img}>
                <Image src={mtg2}
                    alt='placeholder'
                    className='h-auto w-auto'
                    priority />
            </div>
           <Footer/>
        </div>
    )
}