import { Box, Typography, TextField, Button, Divider, IconButton, Grid, ButtonGroup } from '@mui/material';
import { Close, Star, Schedule, LocationOn } from '@mui/icons-material';
import { useState } from 'react';

export default function ServiceForm({ service, onClose }: {
  service: any,
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    notes: ''
  });

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95%', sm: '90%', md: '600px' },
        maxHeight: '90vh',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        color: 'white',
        p: [2, 3],
        position: 'relative'
      }}>
        <IconButton
          onClick={onClose}
          sx={{ 
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white'
          }}
        >
          <Close />
        </IconButton>
        
        <Typography variant="h4" gutterBottom>
          Book {service.name}
        </Typography>
        <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 600 }}>
          ${service.price} starting
        </Typography>
      </Box>

      {/* Form Content */}
      <Box sx={{ p: 3, mb: 5, maxHeight: '60vh', overflow: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Preferred Date"
                type="date"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                label="Service Address"
                variant="outlined"
                required
                multiline
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                helperText="Where should we come to detail your vehicle?"
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                label="Special Instructions (Optional)"
                variant="outlined"
                multiline
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                helperText="Any specific requests or vehicle details we should know about?"
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Service Summary */}
          <Box sx={{mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Service Summary
            </Typography>
            {service.perks.slice(0, 3).map((perk: string, index: number) => (
              <Typography key={index} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                • {perk}
              </Typography>
            ))}
          </Box>
          <ButtonGroup orientation="vertical" fullWidth>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{ fontSize: '1.1rem', mb: 1 }}
          >
            Confirm Booking
          </Button>
          
          <Button
            variant="outlined"
            onClick={onClose}
            size="medium"
          >
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </Box>
    </Box>
  );
}