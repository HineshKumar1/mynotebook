import React,{useContext,useState} from 'react'
import notecontext from '../context/notes/NoteContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddNote() {
    const context  = useContext(notecontext);
    const {AddNotes} = context;

    const [note, setnote] = useState({
        title : " ",
        description : " ",
        tag  : "Personal"
    });
    const handleclick = (e)=>{
        e.preventDefault();
        AddNotes(note.title,note.description,note.tag)

    }
    const onchange = (e)=>{
        setnote({...note, [e.target.name] : e.target.value})
    }
    return (
        <>
            <h2 className='helo'>Add Your Notes Here!</h2>
            <br /><br />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control id='title' type="text" name='title' placeholder="Enter Title" onChange={onchange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control id='description' type="text" name='description' placeholder="Enter Description" onChange={onchange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleclick} variant="primary" type="submit">
                    Add Note
                </Button>
            </Form>
        </>
    )
}

export default AddNote