import Image from "next/image";
import styles from "@/components/Homepage.module.css";
import logo2 from '@/assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <Image src={logo2}
            alt='placeholder'
            className='h-32 w-32'
            priority 
            />
            &copy;
        <a 
                href="https://www.linkedin.com/in/mong-vo/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
            >
            <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />
        </a>
        </div>
    );
};