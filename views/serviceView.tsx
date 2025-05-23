"use client";

import PageView from "@/views/pageView";
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import ServiceForm from '@/components/Forms/ServiceForm';

import styles from "./home.module.css";
import locale from "@/locales/es";
import ServiceCard from "@/components/Cards/ServiceCard";

export default function ServiceView() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service: any) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <PageView>
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
        <Typography variant="h1" mt={4}>{locale.services.title}</Typography>
        <Typography variant="subtitle1">{locale.services.subtitle}</Typography>
        <Typography
          sx={{ textAlign: { xs: 'left', md: 'center' } }}
          variant="body1"
        >
          {locale.services.description}
        </Typography>
        <Typography variant="h2" mt={4}>{locale.services.title2}</Typography>
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
          {locale.services.list.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookNow={handleOpen}
            />
          ))}
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <ServiceForm service={selectedService} onClose={handleClose} />
      </Modal>
    </PageView>
  );
}