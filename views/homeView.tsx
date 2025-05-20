import PageView from "@/views/pageView";
import { Box, Button, Typography } from '@mui/material';
import Image from "next/image";

import styles from "./home.module.css";
import locale from "@/locales/es";
import LoadedMap from "@/components/Map/LoadedMap";

export default function HomeView() {
  return (
    <PageView>
      <Image
        src="/lemans.png"
        alt="LeMans Logo"
        height={500}
        width={400}
        className={styles.logo}
      />
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
        <Typography variant="h1">{locale.home.title}</Typography>
        <Typography variant="subtitle1">{locale.home.subtitle}</Typography>
        <Typography
          sx={{ textAlign: { xs: 'left', md: 'center' } }}
          variant="body1"
        >
          {locale.home.description}
        </Typography>
        <Button
          size="small"
          href="/services"
          variant="contained"
          sx={{ textAlign: 'center', width: 'fit-content', mt: 4 }}
        >
          {locale.home.button}
        </Button>
        <Typography variant="h1" mt={4}>{locale.home.map.title}</Typography>
        <Typography variant="h2">{locale.home.map.subtitle}</Typography>
        <Typography
          sx={{ textAlign: { xs: 'left', md: 'center' } }}
          variant="body1"
        >
          {locale.home.map.description}
        </Typography>
       <LoadedMap />
      </Box>
    </PageView>
  );
}