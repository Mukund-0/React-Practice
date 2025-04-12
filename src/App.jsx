import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './App.css'


function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#800080', height: '100vh', width: '100vh' }}>
      <Typography variant="h1" > To do list </Typography>
      <Box component="section">
      <TextField sx={{width: "100%"}} id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      </Box>
    </Container>
  )
}

export default App
