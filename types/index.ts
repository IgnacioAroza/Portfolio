import { IconType } from "react-icons";

export interface Project {
    id?: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface Skill {
    name: string;
    icon: IconType;
    category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}