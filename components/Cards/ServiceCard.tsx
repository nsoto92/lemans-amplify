// components/ServiceCard.tsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Divider
} from '@mui/material';
import { Star, CheckCircle } from '@mui/icons-material';

export interface ServiceCardProps {
  id: string;
  name: string;
  perks: string[];
  price: number;
  imageUrl?: string;
}

export default function ServiceCard({ service, onBookNow }: {
  service: ServiceCardProps,
  onBookNow: (service: ServiceCardProps) => void 
}) {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 380 },
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Popular Badge */}
      {service.id === '1' && (
        <Chip
          label="Most Popular"
          color="secondary"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
            fontWeight: 600,
          }}
        />
      )}

      {service.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={service.imageUrl}
          alt={service.name}
          sx={{
            objectFit: 'cover',
          }}
        />
      )}

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          {service.name}
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
            ${service.price}
            <Typography component="span" variant="body2" color="text.secondary">
              /starting
            </Typography>
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          What's Included:
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          {service.perks.map((perk, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <CheckCircle sx={{ color: 'secondary.main', fontSize: 18, mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {perk}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0 }}>
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
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
