"use client";

import PageView from "@/views/pageView";
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import ServiceForm from '@/components/Forms/ServiceForm';
import { motion } from 'framer-motion';

import styles from "./home.module.css";
import locale from "@/locales/es";
import ServiceCard, { ServiceCardProps } from '@/components/Cards/ServiceCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.8,
    }
  }
};

export default function ServiceView() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCardProps | undefined>(undefined);

  const handleOpen = (service: ServiceCardProps) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(undefined);
  };

  return (
    <PageView>
      <motion.div
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', md: '80%' },
            gap: 2,
          }}
          className={styles.content}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h1" mt={4}>{locale.services.title}</Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="subtitle1">{locale.services.subtitle}</Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              sx={{ textAlign: { xs: 'left', md: 'center' } }}
              variant="body1"
            >
              {locale.services.description}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" mt={4}>{locale.services.title2}</Typography>
          </motion.div>
          <motion.div
            variants={cardsContainerVariants}
            style={{ width: '100%' }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              flexWrap="wrap"
              gap={2}
              justifyContent="center"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {locale.services.list.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onBookNow={handleOpen}
                  index={index}
                />
              ))}
            </Box>
          </motion.div>
        </Box>
      </motion.div>
      <Modal open={open} onClose={handleClose}>
        <ServiceForm service={selectedService} onClose={handleClose} />
      </Modal>
    </PageView>
  );
}