
import styles from '@/components/Homepage.module.css';
import styles2 from '@/components/Mentors.module.css';
import Image from 'next/image';
import img from '@/assets/anon.png';
import mong from '@/assets/Mong_Vo_President.jpg';
import aabha from '@/assets/Aabha_Muley_Vice_President.jpg'
import jj from '@/assets/JJ.jpeg';
import vila from '@/assets/Vilasini_Gunasekaran_Marketing.jpg'
import jackie from '@/assets/Jaqueline_Aguirre_Secretary.jpg';
import Footer from './Footer';
import Link from 'next/link';

export default function Contactpage() {
    return (
        <div>
            <div className={styles2.title}>
                Exec Board
            </div>
            <div className={styles2.container}>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={mong}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles2.name}>
                        Mong Vo
                    </div>
                    <div className={styles2.text}>
                        President 
                    </div>
                    <div className={styles.text}>
                        Senior | Computer Science | Philosophy & Cognitive Science Minor
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={aabha}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles2.name}>
                        Aabha Muley
                    </div>
                    <div className={styles2.text}>
                        Vice President
                    </div>
                    <div className={styles.text}>
                        Sophomore | Cognitive Science & MIS
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={img}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles2.name}>
                        Manya Vikram
                    </div>
                    <div className={styles2.text}>
                        Treasurer
                    </div>
                    <div className={styles.text}>
                        Bio
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={jj}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles2.name}>
                        JJ Huynh
                    </div>
                    <div className={styles2.text}>
                        Marketing Officer | Website Developer
                    </div>
                    <div className={styles.text}>
                        Junior | Computer Science | Design & Media Minor | Game Design Emphasis
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={vila}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles2.name}>
                        Vilasini Gunasekaran
                    </div>
                    <div className={styles2.text}>
                        Chief Marketing Officer
                    </div>
                    <div className={styles.text}>
                        Sophomore | Computer Science
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={jackie}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles2.name}>
                        Jaqueline Aguirre
                    </div>
                    <div className={styles2.text}>
                        Secretary
                    </div>
                    <div className={styles.text}>
                        Junior | Computer Science | Business Minor
                    </div>
                </div>
            </div>
           <div className={styles.text}>
                <Link className={styles.link} target='_blank' href=''>
                Contact Us!
                </Link>
            </div>
           <Footer/>
        </div>
    )
}