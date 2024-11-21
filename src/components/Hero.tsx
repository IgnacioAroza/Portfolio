import React from 'react';
import { motion } from 'framer-motion';
import { 
    Container,
    Typography,
    Box,
    IconButton,
    Stack,
    Avatar } from '@mui/material';
import { GitHub,
    LinkedIn,
    Email } from '@mui/icons-material';

const Hero: React.FC = () => {
    return (
        <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, #1a237e, #000051)'
        }}
        >
            <Container maxWidth='md'>
                <Stack 
                spacing={4}
                alignItems='center'
                textAlign='center'
                >
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <Avatar 
                            src='https://res.cloudinary.com/dcxa0ozit/image/upload/v1732064812/utils/CV.png'
                            alt='Ignacio'
                            sx={{
                                width: 200,
                                height: 200,
                                border: '4px solid white',
                                boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                                mb: 3
                            }}
                        />
                    </motion.div>

                    <Typography
                        component={motion.h1}
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        variant='h2'
                        color='white'
                        fontWeight='bold'
                    >
                        Ignacio Aroza
                    </Typography>

                    <Typography
                        component={motion.h2}
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        variant='h3'
                        color='white'
                        fontWeight='bold'
                    >
                        Full Stack Developer
                    </Typography>

                    <Typography
                        component={motion.p}
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        variant="h5"
                        color="grey.300"
                        sx={{ maxWidth: '700px' }}
                    >
                        Transformando ideas en soluciones elegantes y escalables
                    </Typography>

                    <Stack direction='row' spacing={2}>
                        {[
                            { icon: <GitHub />, url: 'https://github.com/IgnacioAroza'},
                            { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/ignacio-aroza-0b005328a' },
                            { icon: <Email />, url: 'mailto:ignacioaroza.ia@gmail.com' }
                        ].map((social, index) => (
                            <IconButton
                                key={index}
                                component={motion.a}
                                href={social.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                sx={{
                                    color:'white',
                                    backgroundColor:'rgba(255,255,255,0.1)',
                                    '&hover': {
                                         backgroundColor: 'rgba(255,255,255,0.2)'
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
