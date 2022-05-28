import React, { useEffect, useState } from 'react';
 
 

export const AnimatedLine =()=>{

const [state , setState] =useState(false );
    useEffect(()=>{
                setTimeout(()=>{
                    setState(true);
                },50)
    }, [])

return    <div class={"portfolio_title_line" + (state? " active ": " ")}/>
 

}