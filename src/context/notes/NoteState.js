import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const s1= {
        "name" : "Hinesh Kumar",
        "class" : "5B",
    }
    const [state, setstate] = useState(s1);
    const update=()=>{
        setTimeout(() => {
            setstate({
                "name" : "Haresh Kumar",
                "class" : "7A"
            })
        }, 3000);
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
   )
}

export default NoteState