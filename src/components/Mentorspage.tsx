
import styles from '@/components/Mentors.module.css';
import styles2 from '@/components/Homepage.module.css';
import Image from 'next/image';
import img from '@/assets/anon.png'
import Footer from './Footer';
import lauren from '@/assets/lauren.png'
import codey from '@/assets/codey.jpg'
import mong from '@/assets/Mong_Vo_President.jpg'

export default function Mentorspage() {
    return (
        <div>
            <div className={styles.title}>
                Meet the Mentors!
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={lauren}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Lauren Bobo
                    </div>
                    <div className={styles.text}>
                        Computer Science | Cognitive Science Minor | Graduate
                    </div>
                    <div className={styles2.text}>
                    Hobbies: Video Games, Weightlifting <br></br>
                    Mentoring: Academic Guidance, Career Development, Technical Skills,
                    Personal Growth, Networking, First-Generation
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={codey}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Codey Borrelli
                    </div>
                    <div className={styles.text}>
                        Computer Science | Alumni
                    </div>
                    <div className={styles2.text}>
                    Hobbies: Gaming, Explorring Outside, Hanging out with friends <br></br>
                    Mentoring: Academic Guidance, Career Development, Technical Skills,
                    Personal Growth,

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={mong}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Mong Vo
                    </div>
                    <div className={styles.text}>
                        Computer Science | Philosophy & Cognitive Science Minor | Senior
                    </div>
                    <div className={styles2.text}>
                        Hobbies: Watching TV, Reading, Baking <br></br>
                        Mentoring: Career Development, Personal Growth, Networking
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
    )
}