import React from "react"
//import TodoList from "./todolist";

export default function Avatar():JSX.Element{
    const name = "Gregorito Y. Zara";
    const src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.eluniverso.com%2Fresizer%2FN0GXzYVKqYeLhSDPk89y9Q_eh7Q%3D%2Farc-anglerfish-arc2-prod-eluniverso%2Fpublic%2F25ZTGTPTLJBUJE7TDICD6Z5IEU.png&imgrefurl=https%3A%2F%2Fwww.eluniverso.com%2Fentretenimiento%2Ftelevision%2Fjohn-cena-regresa-como-el-incomprendido-superheroe-peacemaker-en-hbo-max-nota%2F&tbnid=B2PRkgIjFoPDUM&vet=12ahUKEwi0vr21rv38AhWDwykDHcQlCzcQMygqegUIARC8Ag..i&docid=0EuvWBnP4VCGjM&w=1200&h=900&q=Superh%C3%A9roe&ved=2ahUKEwi0vr21rv38AhWDwykDHcQlCzcQMygqegUIARC8Ag"; 
    
    return(
        <div>
            <img 
                src={src} 
                alt={name}
                width={100}
                height={100}
            />
        </div>
    )
}