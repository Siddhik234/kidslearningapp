import React, { useState } from "react";
import {Grid,Button,Card,CardContent} from "@mui/material";

export const Fruits=()=>{
    const[fruit,setFruit]=useState("see fruits name here")
    return(
        <div className="ssub">
        <h1>Fruits Home</h1>
        <Grid container spacing={3}>
         <Grid item xs={12} >
        <Card> <CardContent className="txt"> {fruit} </CardContent> </Card>
         </Grid>
         <Grid item xs={4}>
         <Button variant="contained" fullWidth color="primary" onClick={()=>setFruit("MANGO")} >Mango </Button>
         </Grid>
         <Grid item xs={4}>
            <Button variant="contained" fullWidth color="warning" onClick={()=>setFruit("ORANGE")} >Orange </Button>
         </Grid>
         <Grid item xs={4}>
        <Button variant="contained" fullWidth color="success" onClick={()=>setFruit("BANANA")}>Banana</Button>
         </Grid>
         <Grid item xs={2}>
        <Button variant="contained" fullWidth color="success" onClick={()=>setFruit("GRAPES")}>grapes</Button>
         </Grid>
         <Grid item xs={2}>
        <Button variant="contained" fullWidth color="success" onClick={()=>setFruit("APPLE")}>Apple</Button>
         </Grid>
         <Grid item xs={2}>
        <Button variant="contained" fullWidth color="success" onClick={()=>setFruit("PINEAPPLE")}>Pineapple</Button>
         </Grid>
         <Grid item xs={2}>
        <Button variant="contained" fullWidth color="success" onClick={()=>setFruit("PAPAYA")}>Papaya</Button>
         </Grid>
         <Grid item xs={2}>
         <Button variant="contained" fullWidth color="error" onClick={()=>setFruit("KIVI")} >kivi</Button>
         </Grid>
         <Grid item xs={2}>
         <Button variant="contained" fullWidth color="warning" onClick={()=>setFruit("CHIKU")} >chiku</Button>
         </Grid>

        </Grid>
        </div>
    )
}