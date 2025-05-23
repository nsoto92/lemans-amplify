// components/ServiceCard.tsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box
} from '@mui/material';

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
        width: 400,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        '&:hover': { boxShadow: 6 }
      }}
    >
      {service.imageUrl && (
        <CardMedia
          component="img"
          height="180"
          image={service.imageUrl}
          alt={service.name}
          sx={{
            backgroundColor: 'white',
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, overflow: 'scroll' }}>
        <Typography color="black" variant="h2" gutterBottom>
          {service.name}
        </Typography>
        {service.perks.map((point, idx) => (
          <Typography component="li" key={idx} variant="caption" color="black">
            {point}
          </Typography>
        ))}
      </CardContent>
      <Box sx={{ px: 2, pb: 1 }}>
        <Typography variant="subtitle1" color="primary">
          Precios desde ${service.price.toFixed(2)}
        </Typography>
      </Box>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none' }}
          onClick={() => onBookNow(service)}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};
