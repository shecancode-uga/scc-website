
import styles from '@/components/Mentors.module.css'
import Image from 'next/image';
import img from '@/assets/anon.png'
import Footer from './Footer';

export default function Mentorspage() {
    return (
        <div>
            <div className={styles.title}>
                Meet the Mentors!
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={img}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Mentor Name
                    </div>
                    <div className={styles.text}>
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={img}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Mentor Name
                    </div>
                    <div className={styles.text}>
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={img}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Mentor Name
                    </div>
                    <div className={styles.text}>
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={img}
                            alt='placeholder'
                            className='h-auto w-auto'
                            priority />
                    </div>
                    <div className={styles.name}>
                        Mentor Name
                    </div>
                    <div className={styles.text}>
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                        Random Random Random Random Random Random Random Random
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
    )
}