import { useState } from "react"

export const ToggleButton = () => {

    const [isOn,  setIsON] = useState(false);

    const toggle = () => {

        setIsON(!isOn);
    }

    return(

        <>
        <p>The Button is {isOn ? "ON" : "OFF" }</p>
        <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn ON'}</button>
        </>
    )
}