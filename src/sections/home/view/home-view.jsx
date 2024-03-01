import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hellooo 👋👋👋
      </Typography>
      <Button component={Link} to="/chat-view" variant="contained" color="primary">
        Go to Chat View
      </Button>
    </Container>
  );
}
