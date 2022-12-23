import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import loginService from '../services/AutenticadorService'

export default function Login(props) {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };
/*
  localStorage.setItem("mykey","myvalue");
  localStorage.getItem("mykey");
  localStorage.removeItem("mykey");
  localStorage.clear();
  localStorage.setItem("ourarraykey",JSON.stringify(ourArray));
*/
  const [lembrarme, setLembrarme] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useLayoutEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"))
      setPassword(localStorage.getItem("password"))
      setLembrarme(true)
    }
  }, [])

  /*
  var ourArray =[1,2,3,4,5];
  var storedArray = localStorage.getItem("ourarraykey"); ourArray = JSON.parse(storedArray);

  const App = () => {
    const [value, setValue] = React.useState('');
   
    const onChange = event => {
      localStorage.setItem('myValueInLocalStorage', event.target.value);
   
      setValue(event.target.value);
    };
   
    return (
      <div>
        <h1>Hello React with Local Storage!</h1>
   
        <input value={value} type="text" onChange={onChange} />
   
        <p>{value}</p>
      </div>
    );
  };

*/
  const validar = async () => {

    try {
      await loginService(email, password)
      sessionStorage.setItem("login", true)
      props.verificarLogin()
      navigate("/menu")

    } catch (error) {
      alert(error)
    }


  }

  const armazenarEmailSenha = () => {
    setLembrarme(!lembrarme)
    if (!lembrarme) {
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
    } else {
      localStorage.removeItem("email")
      localStorage.removeItem("password")
    }

  }

  const limpar = () => {
    setEmail("")
    setPassword("")
  }


  return (
    <div className='login'>
    <Grid container style={{ padding: 10 }}>
      <Grid item xs={12}>
        <div style={{ textAlign: "center" }}>
          <h1>Sejam Bem-Vindos</h1>
          <h2>WIKIWARS ATITUS</h2>
       
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
      <Grid item md={4} xs={12} sm={12} className="login"  style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}>
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="E-mail"
            fullWidth={true}
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Password"
            fullWidth={true}
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox
                checked={lembrarme}
                onChange={armazenarEmailSenha} />}
              label="Lembrar-me" />
          </FormGroup>
        </div>
        <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button validar={"+"} action={incrementCount} />
        </div>
        </div>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={validar}
            >Entrar</Button>
          <Button variant="outlined" onClick={limpar}>Cancelar</Button>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
    </Grid>
    </div>
  )
}

