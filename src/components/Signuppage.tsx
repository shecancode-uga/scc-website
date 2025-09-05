import styles from "@/components/Homepage.module.css";
import styles2 from "@/components/Mentors.module.css";
import Link from "next/link";

export default function Signuppage() {
    return(
        <div>
            <div className={styles2.title}>
                Sign Up!
            </div>
            <div className={styles.text}>
                <Link className={styles.link} target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScl-rL9o8JoQXBfseeNI56WKu29PvAr9AaFTshGv18EfZ0H5w/viewform?pli=1"> 
                Mentor Form </Link>
            </div>
            <div className={styles.text}>
                <Link className={styles.link} target='_blank' href=''>
                Mentee Form
                </Link>
            </div>
        </div>
    )
}