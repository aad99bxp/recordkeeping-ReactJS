import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';




function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="form">
       <Stack direction="row" spacing={2}>
         <TextField id="outlined-basic" label="Name" variant="outlined" />
         <TextField id="outlined-basic" label="E-mail" variant="outlined" />
         <Button variant="contained" color="success">
           <AddIcon/>
         </Button>   
       </Stack>  
      </div>
      
    </div>
  );
}

export default App;
