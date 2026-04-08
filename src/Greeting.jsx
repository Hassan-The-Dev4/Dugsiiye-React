import { useEffect,useState } from "react";


export const Greeting = () =>{

    const [name, setName] = useState("")
    const [greeting, setGreeting] = useState("Hello")

    useEffect(()=> {
        if(!name){
            document.title = "Welcome!";
        }else{
            document.title = `${greeting}, ${name}`;
        }
        
    },[name,greeting]);

    return (
        <div>

            <div>
            <h2>Inter Your name</h2>
            <input 
            type="text"
            onChange={(e)=> setName(e.target.value)}
            value={name}

            />
            </div>

            <div>
            <h2>Choose your name</h2>
            <input 
            type="text"
            onChange={(e)=> setGreeting(e.target.value)}
            value={greeting}

            />
            </div>
        </div>
    )
}