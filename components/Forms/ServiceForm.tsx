import { Box, Typography, TextField, Button } from '@mui/material';

export default function ServiceForm({ service, onClose }: {
  service: any,
  onClose: () => void
}) {
  if (!service) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', md: '50%' },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>{service.name}</Typography>
      <Typography variant="body1" gutterBottom>Price: ${service.price.toFixed(2)}</Typography>
      <Typography variant="body2" gutterBottom>Perks:</Typography>
      <ul>
        {service.perks.map((perk: any, index: any) => (
          <li key={index}>{perk}</li>
        ))}
      </ul>
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Address"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
        Submit
      </Button>
      <Button variant="text" onClick={onClose} sx={{ mt: 1 }} fullWidth>
        Close
      </Button>
    </Box>
  );
}