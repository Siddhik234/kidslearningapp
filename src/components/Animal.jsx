import React,{useState} from "react";
import { Grid,Button,Card,CardContent } from "@mui/material";

export const Animal=()=>{
    const [animal,setAnimal]=useState("see animal name here");
    return(
        <div className="ssub">
        <h1>Animals Home</h1>
        <Grid container spacing={3}>
         <Grid item xs={12}>
         <Card>
        <CardContent className="txt">{animal}</CardContent>
         </Card>
         </Grid>
         <Grid item xs={4}>
            <Button variant="contained" fullWidth color="warning" onClick={e=>setAnimal("CAT")} >Cat</Button>
         </Grid>
         <Grid item xs={4}>
        <Button variant="contained" fullWidth color="primary" onClick={e=>setAnimal("TIGER")}>Tiger</Button>
         </Grid>
         <Grid item xs={4}>
            <Button variant="contained" fullWidth  color="warning" onClick={e=>setAnimal("ZEBRA")}>Zebra</Button>
         </Grid>
         <Grid item xs={3}>
          <Button variant="contained" fullWidth color="warning" onClick={()=>setAnimal("GOAT")}>Goat</Button>
         </Grid>
         <Grid item xs={3}>
          <Button variant="contained" fullWidth color="success" onClick={()=>setAnimal("CUB")}>Cub</Button>
         </Grid>
         <Grid item xs={3}>
          <Button variant="contained" fullWidth color="warning" onClick={()=>setAnimal("CHETAH")}>Chetah</Button>
         </Grid>
         <Grid item xs={3}>
          <Button variant="contained" fullWidth color="success" onClick={()=>setAnimal("ELEPHANT")}>Elephant</Button>
         </Grid>
        </Grid>
        </div>
    )
}