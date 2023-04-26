import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const initialNotes = []

  const [Notes, setNotes] = useState(initialNotes);

  //Get All Notes
  const getNotes = async () => {
    //TODO API Call
        //API Calling:
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDU1NjIxYzIxN2NiNTI5M2FjMTZhIn0sImlhdCI6MTY3OTE0MDc3NH0.JQk_2JImrMuw-_7PMguAPyBZ8CsTUniwXwwF9yw3UP8"
          }
        });
        const json = await response.json();
        setNotes(json)
  }

  //Add Notes
  const AddNotes = async (title, description, tag) => {
      // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDU1NjIxYzIxN2NiNTI5M2FjMTZhIn0sImlhdCI6MTY3OTE0MDc3NH0.JQk_2JImrMuw-_7PMguAPyBZ8CsTUniwXwwF9yw3UP8"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(Notes.concat(note))
  }


  //Edit Notes
  const EditNotes = async (id, title, description, tag) => {
    //API Calling:
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDU1NjIxYzIxN2NiNTI5M2FjMTZhIn0sImlhdCI6MTY3OTE0MDc3NH0.JQk_2JImrMuw-_7PMguAPyBZ8CsTUniwXwwF9yw3UP8"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    console.log(json)

    // Logic to edit in client
    for (let index = 0; index < Notes.length; index++) {
      const element = Notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }
  
  //Delete Notes
  const DeleteNotes = async (id) => {
    //API Calling
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDU1NjIxYzIxN2NiNTI5M2FjMTZhIn0sImlhdCI6MTY3OTE0MDc3NH0.JQk_2JImrMuw-_7PMguAPyBZ8CsTUniwXwwF9yw3UP8"
      },
    });
    const json = response.json();
    console.log(json)

    const newNote = Notes.filter((note) => { return note._id !== id });
    setNotes(newNote)
  }

  //Provide Function to State
  return (
    <NoteContext.Provider value={{ Notes, AddNotes, EditNotes, DeleteNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState