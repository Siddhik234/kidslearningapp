import React from "react";
import {Animal} from "./Animal";
import { Article } from "./Article";
import { Fruits } from "./Fruits";

export const Home=()=>{
    return(
        <div className="sub">
            <h1>Home</h1>
            <Article/>
            <Fruits/>
            <Animal/>
        </div>
    )
}