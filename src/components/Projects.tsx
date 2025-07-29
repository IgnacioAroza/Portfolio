import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import type { Project } from '../../types';

const projects: Project[] = [
  {
    title: "Configurador Coliseo",
    description: "Aplicación de escritorio desarrollada con Electron y JavaScript para la gestión y configuración de parámetros de un sistema CRM empresarial. La aplicación permite configurar rutas de archivos, filtros de datos y parámetros de exportación que son guardados en formato XML para su posterior lectura por el sistema CRM principal.",
    technologies: ["HTML5", "CSS", "JavaScript", "Node.js", "Electron", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1732068828/utils/MiamiRental.jpg",
    githubUrl: "https://github.com/IgnacioAroza/config_app.git",
  },
  {
    title: "Rental Miami",
    description: "Aplicación web desarrollada con React y Vite, que utiliza Redux para la gestión de estado y Material UI para la interfaz de usuario. El proyecto implementa hooks personalizados y una arquitectura modular para la administración de reservas, pagos, apartamentos, usuarios y reportes. Además, permite la descarga y envío por email de reportes y resúmenes en PDF, así como la administración de usuarios y paneles para administradores.",
    technologies: ["React", "JavaScript", "Redux", "Axios", "Material UI", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1732068828/utils/MiamiRental.jpg",
    githubUrl: "https://github.com/IgnacioAroza/MiamiGetAwayFront.git",
    liveUrl: "https://miami-getaway.com"
  },
  {
    title: "Rental Miami API",
    description: "Backend API en Node.js, Express y TypeScript para una plataforma de alquiler de apartamentos en Miami. Permite la gestión de usuarios, apartamentos, reservas y pagos, con autenticación JWT, base de datos PostgreSQL y almacenamiento de imágenes en Cloudinary. Incluye pruebas automatizadas y manejo robusto de errores. Tambien incluye un sistema de reportes en PDF y un panel de administración para gestionar usuarios y apartamentos. Agrega un entorno de pruebas con Docker.",
    technologies: ["TypeScript", "Node.js", "Express", "Vitest", "PostgreSQL", "Docker", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1747319623/utils/rentalAPI.jpg",
    githubUrl: "https://github.com/IgnacioAroza/MiamiGetAwayBack.git",
  },
  {
    title: "URL Shortener Front-End",
    description: "Front-End para un acortador de URLs.",
    technologies: ["React", "TypeScript", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1733870948/utils/UrlShoten.png",
    githubUrl: "https://github.com/IgnacioAroza/url-front.git",
    liveUrl: "https://url-shortener-hzvf.onrender.com"
  },
  {
    title: "URL Shortener Back-End",
    description: "API para el acortador de URLs.",
    technologies: ["TypeScript", "Node.js", "Docker", "MongoDB", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1733871200/utils/UrlBack.png",
    githubUrl: "https://github.com/IgnacioAroza/url-shortened.git",
  },
  {
    title: "Buy Sell Crypto",
    description: "Pagina de compra y venta de Criptomonedas desarrollado para la facultad.",
    technologies: ["JavaScript", "Vue.js", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1732146807/utils/Lab3Crypto.png",
    githubUrl: "https://github.com/IgnacioAroza/final-lab-3.git",
    liveUrl: "https://final-lab-3.netlify.app"
  },
  {
    title: "Claims BackEnd",
    description: "Sistema BackEnd para carga, vista, actualización y eliminacion de reclamos. Creado como proyecto final para la facultad.",
    technologies: ["TypeScript", "Docker", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1732147246/utils/SistemasProject.png",
    githubUrl: "https://github.com/IgnacioAroza/Proyecto_Sistemas1.git",
  },
  {
    title: "Stock Manage",
    description: "Proyecto de manejo de Stock pequeño para la facultad.",
    technologies: ["C#", ".NET", "MySQL", "Git"],
    imageUrl: "https://res.cloudinary.com/dcxa0ozit/image/upload/v1732146110/utils/Lab4Project.png",
    githubUrl: "https://github.com/IgnacioAroza/ProyectoMCVApp.git"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <GitHubIcon className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <LaunchIcon className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;