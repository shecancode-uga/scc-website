
import styles from '@/components/Homepage.module.css';
import styles2 from '@/components/Mentors.module.css';
import Image from 'next/image';
import img from '@/assets/anon.png';
import mong from '@/assets/Mong_Vo_President.jpg';
import aabha from '@/assets/Aabha_Muley_Vice_President.jpg'
import jj from '@/assets/JJ.jpeg';
import vila from '@/assets/Vilasini_Gunasekaran_Marketing.jpg'
import jackie from '@/assets/Jaqueline_Aguirre_Secretary.jpg';
import manya from '@/assets/Manya_Vikram_Treasurer.jpg';
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
                            alt='mong'
                            fill
                            className='object-contain'
                            priority
                        />
                    </div>
                    <div className={styles2.name}>
                        Mong Vo
                    </div>
                    <div className={styles2.text}>
                        President <br></br>
                        Year: 4th < br></br>
                        Major: Computer Science <br></br>
                        Minor: Philosophy & Cognitive Science Minor
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={aabha}
                            alt='aabha'
                            fill
                            className='object-contain'
                            priority
                        />
                    </div>
                    <div className={styles2.name}>
                        Aabha Muley
                    </div>
                    <div className={styles2.text}>
                        Vice President <br></br>
                        Year: 2nd <br></br>
                        Major: Cognitive Science & MIS
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={manya}
                            alt='manya'
                            fill
                            className='object-contain'
                            priority
                        />
                    </div>
                    <div className={styles2.name}>
                        Manya Vikram
                    </div>
                    <div className={styles2.text}>
                        Treasurer <br></br>
                        Year: 3rd <br></br>
                        Major: Computer Science <br></br>
                        Minor: Business Minor | Fintech Certificate
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={jj}
                            alt='jj'
                            fill
                            className='object-contain'
                            priority
                        />
                    </div>
                    <div className={styles2.name}>
                        JJ Huynh
                    </div>
                    <div className={styles2.text}>
                        Marketing Officer | Website Developer <br></br>
                        Year: 3rd <br></br>
                        Major: Computer Science <br></br>
                        Minor: Design & Media | Game Design Emphasis
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={vila}
                            alt='vila'
                            fill
                            className='object-contain'
                            priority
                            />
                    </div>
                    <div className={styles2.name}>
                        Vilasini Gunasekaran
                    </div>
                    <div className={styles2.text}>
                        Marketing Officer <br></br>
                        Year: 2nd <br></br>
                        Major: Computer Science<br></br>
                    </div>
                </div>
                <div className={styles2.card}>
                    <div className={styles2.img}>
                        <Image src={jackie}
                            alt='jackie'
                            fill
                            className='object-contain'
                            priority
                            />
                    </div>
                    <div className={styles2.name}>
                        Jaqueline Aguirre
                    </div>
                    <div className={styles2.text}>
                        Secretary <br></br>
                        Year: 3rd <br></br>
                        Major: Computer Science <br></br>
                        Minor: Business
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                <Link className={styles.link} target='_blank' href='https://docs.google.com/forms/u/1/d/e/1FAIpQLSc4GBShLqtvxOcH8tzF0NMaG9QnCw2mVBBfHAL-kdd0R8kYZg/viewform?usp=send_form'>
                    Contact Us!
                </Link>
            </div>
            <Footer />
        </div>
    )
}