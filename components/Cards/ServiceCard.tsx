// components/ServiceCard.tsx
import React from 'react';
import Link from 'next/link';
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

export default function ServiceCard({
  id,
  name,
  perks,
  price,
  imageUrl
}: ServiceCardProps) {
  return (
    <Card
      sx={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        '&:hover': { boxShadow: 6 }
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={name}
          sx={{
            backgroundColor: 'white',
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography color="black" variant="h2" gutterBottom>
          {name}
        </Typography>
        {perks.map((point, idx) => (
          <Typography component="li" key={idx} variant="caption" color="black">
            {point}
          </Typography>
        ))}
      </CardContent>
      <Box sx={{ px: 2, pb: 1 }}>
        <Typography variant="subtitle1" color="primary">
          Precio desde ${price.toFixed(2)}
        </Typography>
      </Box>
      <CardActions>
        <Link href={`/book/${id}`} passHref>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ textTransform: 'none' }}
          >
            Book Now!=
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
