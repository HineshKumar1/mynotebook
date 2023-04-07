import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const initialNotes = [
        {
          "_id": "6418bd4175bfec7e70f4ec00",
          "user": "641455621c217cb5293ac16a",
          "title": "My Todo",
          "description": "I'm my hinesh kumar",
          "tag": "Personal",
          "date": "2023-03-20T20:08:33.065Z",
          "__v": 0
        },
        {
          "_id": "6418bd4175bfec7e70f4ec02",
          "user": "641455621c217cb5293ac16a",
          "title": "My Todo",
          "description": "I'm my hinesh kumar",
          "tag": "Personal",
          "date": "2023-03-20T20:08:33.228Z",
          "__v": 0
        },
        {
          "_id": "6418bd4175bfec7e70f4ec04",
          "user": "641455621c217cb5293ac16a",
          "title": "My Todo",
          "description": "I'm my hinesh kumar",
          "tag": "Personal",
          "date": "2023-03-20T20:08:33.398Z",
          "__v": 0
        },
        {
          "_id": "6418bd4175bfec7e70f4ec06",
          "user": "641455621c217cb5293ac16a",
          "title": "My Todo",
          "description": "I'm my hinesh kumar",
          "tag": "Personal",
          "date": "2023-03-20T20:08:33.544Z",
          "__v": 0
        },
        {
          "_id": "6418bd4175bfec7e70f4ec08",
          "user": "641455621c217cb5293ac16a",
          "title": "My Todo",
          "description": "I'm my hinesh kumar",
          "tag": "Personal",
          "date": "2023-03-20T20:08:33.719Z",
          "__v": 0
        },
        {
          "_id": "641975cafae09af8271167b7",
          "user": "641455621c217cb5293ac16a",
          "title": "My First Todo",
          "description": "Hello",
          "tag": "Personal",
          "date": "2023-03-21T09:15:54.976Z",
          "__v": 0
        },
        {
          "_id": "641dbb52b0323d2f7fc8e7e4",
          "user": "641455621c217cb5293ac16a",
          "title": "My First Todo",
          "description": "Hello",
          "tag": "Personal",
          "date": "2023-03-24T15:01:38.801Z",
          "__v": 0
        },
        {
          "_id": "641dbb72b0323d2f7fc8e7e6",
          "user": "641455621c217cb5293ac16a",
          "title": "My Second Dodo",
          "description": "Hello",
          "tag": "Multi",
          "date": "2023-03-24T15:02:10.507Z",
          "__v": 0
        }
      ]
      
      const [Notes, setNotes] = useState(initialNotes);
      //Add Notes
      const AddNotes = (title,description,tag)=>{
        //TODO API Call
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
        setNotes(Notes.concat(note))
      }
      //Edit Notes
       const EditNotes = (_id)=>{
        
      }
      //Delete Notes
      const DeleteNotes = (_id)=>{
        
      }
    return(
        <NoteContext.Provider value={{Notes,AddNotes,EditNotes,DeleteNotes}}>
            {props.children}
        </NoteContext.Provider>
   )
}

export default NoteState