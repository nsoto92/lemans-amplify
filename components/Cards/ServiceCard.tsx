import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  IconButton
} from '@mui/material';
import { CheckCircle, ExpandLess, ExpandMore } from '@mui/icons-material';
import locale from '@/locales/es';
export interface ServiceCardProps {
  id: string;
  name: string;
  perks: string[];
  price: number;
  imageUrl?: string;
  description: string;
}

export default function ServiceCard({ service, onBookNow }: {
  service: ServiceCardProps,
  onBookNow: (service: ServiceCardProps) => void
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography component="span" variant="body1" color="text.secondary">
            {` ${locale.services.details}`}
          </Typography>
          {expanded ? (
            <IconButton size="medium" onClick={handleExpandClick}>
              <ExpandLess fontSize="inherit" sx={{ color: 'primary.main' }} />
            </IconButton>
          ) : (
            <IconButton size="medium" onClick={handleExpandClick}>
              <ExpandMore fontSize="inherit" sx={{ color: 'primary.main' }} />
            </IconButton>
          )}
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ mt: 1, mb: 2 }} />
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {`${locale.services.includes}:`}
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
        </Collapse>
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
          {locale.services.bookNow}
        </Button>
      </CardActions>
    </Card>
  );
}
