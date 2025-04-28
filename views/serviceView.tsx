import PageView from "@/views/pageView";
import { Box, Button, Typography } from '@mui/material';
import Image from "next/image";

import styles from "./home.module.css";
import locale from "@/locales/es";
import LoadedMap from "@/components/Map/LoadedMap";
import ServiceCard from "@/components/Cards/ServiceCard";
export default function ServiceView() {
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
        <Typography variant="h1" mt={4}>{locale.home.map.title}</Typography>
        <Typography variant="subtitle1">{locale.home.map.subtitle}</Typography>
        <Typography
          sx={{ textAlign: { xs: 'left', md: 'center' } }}
          variant="body1"
        >
          {locale.home.map.description}
        </Typography>
       <LoadedMap />
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
          flexDirection={{xs: "column", md: "row"}}
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
           id={service.id}
           name={service.name}
           imageUrl={service.imageUrl}
           perks={service.perks}
           price={service.price}
         />
        ))}
        </Box>
      </Box>
    </PageView>
  );
}