import React from 'react'
import AddNote from './AddNote';
import Notes from './Notes';
function Home() {
  return (
    <>
    <br />
    <AddNote/>
    <hr />
    <h2 className='helo'>Your Notes</h2>
    <Notes></Notes>
    </>
  )
}

export default Home