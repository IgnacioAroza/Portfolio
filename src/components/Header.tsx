import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['Inicio', 'Proyectos', 'Habilidades', 'Contacto'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: scrolled ? 'rgba(26, 35, 126, 0.95)' : 'transparent',
        boxShadow: scrolled ? 1 : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {sections.map((section) => (
              <motion.div
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  color="inherit"
                  onClick={() => scrollToSection(section)}
                  sx={{
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {section}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;