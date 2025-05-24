"use client"

import PageView from "@/views/pageView";
import { Box, Button, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import Image from "next/image";
import { motion } from 'framer-motion';
import styles from "./home.module.css";
import locale from "@/locales/es";
import LoadedMap from "@/components/Map/LoadedMap";
import { CheckCircle, Schedule, Home } from '@mui/icons-material';

const features = [
  {
    icon: <Home sx={{ fontSize: 40, color: 'secondary.main' }} />,
    title: locale.home.services.cards.home.title,
    description: locale.home.services.cards.home.description
  },
  {
    icon: <CheckCircle sx={{ fontSize: 40, color: 'secondary.main' }} />,
    title: locale.home.services.cards.premium.title,
    description: locale.home.services.cards.premium.description
  },
  {
    icon: <Schedule sx={{ fontSize: 40, color: 'secondary.main' }} />,
    title: locale.home.services.cards.flexible.title,
    description: locale.home.services.cards.flexible.description
  }
];

export default function HomeView() {
  return (
    <PageView>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
          color: 'white',
          py: 8,
          px: 4,
          borderRadius: 4,
          mb: 8,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom sx={{ color: 'white', mb: 2 }}>
            {locale.home.title}
          </Typography>
          <Typography variant="h4" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, fontWeight: 300 }}>
            {locale.home.subtitle}
          </Typography>
          <Button
            size="large"
            href="/services"
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
              color: 'black',
              px: 4,
              py: 2,
              fontSize: '1.2rem',
              '&:hover': {
                background: 'linear-gradient(135deg, #B8860B 0%, #FFD700 100%)',
              }
            }}
            >
              {locale.home.button}
          </Button>
        </motion.div>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          {locale.home.services.title}
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h4" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Map Section */}
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 2 }}>
          {locale.home.map.title}
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          {locale.home.map.description}
        </Typography>
        <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3 }}>
          <LoadedMap showServiceArea lockDrag />
        </Box>
      </Container>
    </PageView>
  );
}