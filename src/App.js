import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';




function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData =()=>{
    setData([...data, {  name, email
      //... is Spread Operator
      //name:name,  //RHS name is from state and LHS is from key
      //email:email;
    }]);
    setName("");
    setEmail("");
  }

  return (
    < div className="App">
      {/* Form Section */}
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField  value={name} onChange ={(event)=> setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange ={(event)=> setEmail(event.target.value)} id="outlined-basic" label="E-mail" variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
       
       
      <div className="data">
      {/* Data Display Section */} 
        <div className="data_val">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Remove</h4>
        </div>
      </div>

    </div>
  );
}

export default App;
