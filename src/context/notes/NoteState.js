import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const initialNotes = [
  ]

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
    //TODO API Call
        //API Calling:
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDU1NjIxYzIxN2NiNTI5M2FjMTZhIn0sImlhdCI6MTY3OTE0MDc3NH0.JQk_2JImrMuw-_7PMguAPyBZ8CsTUniwXwwF9yw3UP8"
          },
          body: JSON.stringify({title,description,tag})
        });
        console.log("Adding new Note");
        const note = {
    
          "_id": "641dbb72b0323d2f7fc8e7e6",
          "user": "641455621c217cb5293ac16a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-03-24T15:02:10.507Z",
          "__v": 0
        };
        const NewNote = await response.json();
        setNotes(Notes.concat(NewNote))
  }


  //Edit Notes
  const EditNotes = async (id, title, description, tag) => {
    //API Calling:
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNDU1NjIxYzIxN2NiNTI5M2FjMTZhIn0sImlhdCI6MTY3OTE0MDc3NH0.JQk_2JImrMuw-_7PMguAPyBZ8CsTUniwXwwF9yw3UP8"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();

    //Logic to edit in client
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
  const DeleteNotes = (id) => {

    const newNote = Notes.filter((note) => { return note._id !== id });
    setNotes(newNote)

  }
  return (
    <NoteContext.Provider value={{ Notes, AddNotes, EditNotes, DeleteNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState