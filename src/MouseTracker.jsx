
import React, { useState,useEffect } from "react";

export const MouseTracker = () => {

    const [showSize, setShowSize] = useState({x:0 , y:0});

    useEffect(()=>{
        const handleMouseMove = (e) =>{
            setShowSize({ x: e.clientX , y: e.clientY  })
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }

    },{});

    return (
        <div>
            <p>Mouse X: {showSize.x}</p>
            <p>Mouse Y: {showSize.y}</p>
        </div>
    )
}