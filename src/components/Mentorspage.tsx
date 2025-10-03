
import styles from '@/components/Mentors.module.css';
import styles2 from '@/components/Homepage.module.css';
import Image from 'next/image';
import img from '@/assets/anon.png'
import Footer from './Footer';
import Mentors from '@/Mentors.json';
import Mentor from '@/components/Mentor';


export default function Mentorspage() {
    return (
        <div>
            <div className={styles.title}>
                Meet the Mentors!
            </div>
            <div>
                {Mentors.length === 0 ? (
                    <p> No mentors available </p>
                ) : (
                    <div className={styles.container}>
                        {Mentors.map((item) => (
                            <Mentor key={item._id} item={item} />
                        ))}
                    </div>
                )
            }
            </div>
          <Footer/>
        </div>
    )
}