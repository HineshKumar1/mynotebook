import React,{useContext, useEffect} from 'react'
import notecontext from '../context/notes/NoteContext'

function About() {
  const a = useContext(notecontext);
  useEffect(() => {
    a.update()
   // eslint-disable-next-line 
  }, [])
  
  return (
    <div>this is {a.state.name} and I study in Class {a.state.class}</div>
  )
}

export default About