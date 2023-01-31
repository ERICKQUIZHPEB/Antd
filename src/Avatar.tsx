import React from "react"
//import TodoList from "./todolist";

export default function Avatar():JSX.Element{
    const name = "Gregorito Y. Zara";
    const src = "https://i.imgur.com/7vQD0fPs.jpg"; 
    
    return(
        <div>
            <img src={src} alt={name}/>
        </div>
    )
}