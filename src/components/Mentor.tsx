import { ReactNode } from 'react';
import Image from "next/image";
import styles from '@/components/Mentors.module.css';
import styles2 from '@/components/Homepage.module.css';
import { promises as fs } from 'fs';



interface MentorProps {
    item: {
        name: string;
        img: string;
        major: string;
        minor: string;
        year: string;
        hobbies: string;
        areas: string;
        exp: string;
    };
}

const Mentor = ({ item }: MentorProps) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className='object-contain'
                        priority
                    />


                </div>
                <div className={styles.name}>
                    {item.name}
                </div>
                <div className={styles.text}>
                    Major: {item.major} <br></br> Minor: {item.minor} <br></br>
                    Year: {item.year}
                </div>
                <div className={styles.textbox}>
                    <p>
                    <strong>Hobbies:</strong> {item.hobbies} <br></br>
                    <strong>Areas:</strong> {item.areas} <br></br>
                    <strong>Past/Current Experiences:</strong> {item.exp}
                </p>
                </div>
            </div>
        </div>
    );
}

export default Mentor;