import Image from "next/image";
import styles from "@/components/Mentors.module.css";
import Mentor from "./Mentor";

interface ProfileProps {
    name: string;
    major: string;
    imageSrc: string;
    description: string;
}