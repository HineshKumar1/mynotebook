import React,{useContext, useEffect}  from 'react'
import notecontext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';

function Notes() {
    const context  = useContext(notecontext);
    const {Notes} = context;
  return (
    <>
      <div className='row my-3'>
        {Notes.map((Notes)=>{
            return <NoteItem key={Notes._id} note={Notes}  />
        })}
        </div>
        <br />
    </>
  )
}

export default Notes