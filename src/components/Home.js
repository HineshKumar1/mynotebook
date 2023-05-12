import React from 'react'
import AddNote from './AddNote';
import Notes from './Notes';
import { useState } from 'react';

function Home(props) {
  const {showAlert} = props;
  return (
    <>
    <br />
    <AddNote showAlert={showAlert}/>
    <hr />
    <h2 className='helo'>Your Notes</h2>
    <Notes showAlert={showAlert}></Notes>
    </>
  )
}

export default Home