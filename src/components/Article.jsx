import { Button, Card, CardContent, Grid } from "@mui/material";
import React,{useState} from "react";

export const Article=()=>{
    const[arti,setArti]=useState("all articles are here")
    return(
        <div className="ssub">
            <h1>Article Home</h1>
        <Grid container spacing={3} >
        <Grid item xs={12}>
        <Card> <CardContent className="txt" > {arti} </CardContent></Card>
        </Grid>
        <Grid item xs={3}>
         <Button variant="contained" fullWidth color="success" onClick={()=>setArti("LAPTOP")} >laptop</Button>
        </Grid>
        <Grid item xs={3}>
         <Button variant="contained" fullWidth color="success" onClick={()=>setArti("FAN")} >fan</Button>
        </Grid>
        <Grid item xs={3}>
         <Button variant="contained" fullWidth color="success" onClick={()=>setArti("CHAIR")} >chair</Button>
        </Grid>
        <Grid item xs={3}>
         <Button variant="contained" fullWidth color="success" onClick={()=>setArti("REMOTE")} >remote</Button>
        </Grid>
        </Grid>
        </div>
    )
}