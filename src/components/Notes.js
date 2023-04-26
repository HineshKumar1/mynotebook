import React, { useContext, useEffect, useRef ,useState} from 'react'
import notecontext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Notes() {
  const context = useContext(notecontext);
  const { Notes, getNotes,EditNotes } = context;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  useEffect(() => {
    getNotes();
  },)

  const ref = useRef(null)
  const Closeref = useRef(null)

  const updateNote = (currentnote) => {
    ref.current.click();
    setnote({
      id : currentnote._id,
      etitle : currentnote.title,
      edescription : currentnote.description,
      etag : currentnote.tag
    })
  }
  const [note, setnote] = useState({
    etitle : " ",
    edescription : " ",
    etag  : " "
});
  const handleclick = (e)=>{
    console.log("Updating note ",note)
    // e.preventDefault();
    handleClose();
    Closeref.current.click();
    EditNotes(note.id,note.etitle,note.edescription,note.etag)

}
const onchange = (e)=>{
    setnote({...note, [e.target.name] : e.target.value})
}

  return (
    <>
      <Button variant="primary" hidden ref={ref} onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form Body  */}
          <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control id='etitle' type="text" name='etitle' placeholder="Enter Title" value={note.etitle} onChange={onchange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control id='edescription' type="text" name='edescription' placeholder="Enter Description" value={note.edescription}  onChange={onchange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control value={note.etag} id='etag' type="text" name='etag' placeholder="Enter tag" onChange={onchange} />
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button ref={Closeref}  variant="primary" onClick={handleclick}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='row my-3'>
        {Notes.map((Notes) => {
          return <NoteItem key={Notes._id} updateNote={updateNote} note={Notes} />
        })}
      </div>
      <br />
    </>
  )
}

export default Notes