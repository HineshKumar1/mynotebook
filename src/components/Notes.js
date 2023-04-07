import React,{useContext, useEffect}  from 'react'
import notecontext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';

function Notes() {
    const context  = useContext(notecontext);
    const {Notes,setNotes} = context;
  return (
    <>
      <div className='row my-3'>
        {Notes.map((Notes)=>{
            return <NoteItem note={Notes}  />
        })}
        </div>
        <br />
    </>
  )
}

export default Notes