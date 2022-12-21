import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Grid, } from '@mui/material'

export default function People() {
  return (
    <>
<Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>

                    <MenuOpcoes />
          
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
    
    </>
  )
}
