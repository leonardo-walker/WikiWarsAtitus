import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Grid, } from '@mui/material'

export default function Starships() {

  const [Starships, setStarships] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/starships/")
            .then((retorno) => setStarships(retorno.data.results))
            .catch((e) => alert(e))

    }, [])

  return (
    <>
<Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>

                    <MenuOpcoes />
          
                </Grid>

                <div>
    <h1>NAVES ESPACIAIS</h1>
    {
        Starships.map((item, key) =>
            <div> Nome: {item.name} - Modelo: {item.model} - Fábrica: {item.manufacturer}</div>
    )
    }
</div>

                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
    
    </>
  )
}
