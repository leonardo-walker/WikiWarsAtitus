import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Grid, } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeoWalker from "../assets/images/LeoWalker.png"


export default function Sobre() {
  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>

          <MenuOpcoes />
          <div>

            <h1>Equipe</h1>
            <Grid item md={12} xs={12} sm={12}>
            <div><h3>Leonardo Walker</h3>
              <img className="img" src={LeoWalker} /></div>
        </Grid>
            

          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>

    </>
  )
}
