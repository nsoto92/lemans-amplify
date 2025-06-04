import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  IconButton
} from '@mui/material';
import { CheckCircle, ExpandMore } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import locale from '@/locales/es';

export interface ServiceCardProps {
  id: string;
  name: string;
  perks: string[];
  price: number;
  imageUrl?: string;
  description: string;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const hoverVariants = {
  hover: {
    y: -1,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

const expandVariants = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const perkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function ServiceCard({ service, onBookNow }: {
  service: ServiceCardProps,
  onBookNow: (service: ServiceCardProps) => void,
  index?: number
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ width: '100%', maxWidth: 380 }}
    >
      <motion.div variants={hoverVariants}>
        <Card
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          {/* Popular Badge */}
          {service.id === '1' && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "backOut" }}
            >
              <Chip
                label={locale.services.popular}
                color="secondary"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  fontWeight: 600,
                }}
              />
            </motion.div>
          )}

          {service.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.imageUrl}
                alt={service.name}
                sx={{
                  objectFit: 'cover',
                }}
              />
            </motion.div>
          )}

          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                {service.name}
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }} gutterBottom>
                  ${service.price}
                  <Typography component="span" variant="body2" color="text.secondary">
                    {` ${locale.services.price}`}
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              onClick={handleExpandClick}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography component="span" variant="body1" color="text.secondary">
                {` ${locale.services.details}`}
              </Typography>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IconButton size="medium" onClick={handleExpandClick}>
                  <ExpandMore fontSize="inherit" sx={{ color: 'primary.main' }} />
                </IconButton>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  variants={expandVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Divider sx={{ mt: 1, mb: 2 }} />
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {`${locale.services.includes}:`}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {service.perks.map((perk, idx) => (
                      <motion.div
                        key={idx}
                        variants={perkVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.05, duration: 0.3, ease: "backOut" }}
                          >
                            <CheckCircle sx={{ color: 'secondary.main', fontSize: 18, mr: 1 }} />
                          </motion.div>
                          <Typography variant="body2" color="text.secondary">
                            {perk}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>

          <CardActions sx={{ p: 3, pt: 0 }}>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ width: '100%' }}
            >
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => onBookNow(service)}
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                {locale.services.bookNow}
              </Button>
            </motion.div>
          </CardActions>
        </Card>
      </motion.div>
    </motion.div>
  );
}
