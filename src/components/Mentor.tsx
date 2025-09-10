import { ReactNode } from 'react';
import styles from '@/components/Mentors.module.css';

interface MentorProps {
    name: string;
    imageSrc: string;
    className?: string;
    description: string;
    children?: ReactNode;
}

const Mentor: React.FC<MentorProps> = ({ name, imageSrc, description, children }) => {
    return (
        <div> {children}</div>
    );
}

export default Mentor;