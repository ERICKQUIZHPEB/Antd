import React from "react"

interface person {
    name:'Gregorito Y. Zara',
    theme:{
        backgroundColor:'black',
        color:'pink',
    },
}

export default function TodoList(person:person){
  return(  
    <div style={person.theme}>
        <h1>{person.name}&apos;s Todos</h1>
        <img className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorito Y. Zara"/>
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    </div>
    );
}