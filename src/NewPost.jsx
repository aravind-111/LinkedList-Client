import axios from 'axios';
import React, { useState } from 'react'

function NewPost() {
    const [title, setTitle] = useState("");

    const handleTitle = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleSubmit = async () => {
        const a = await axios.post("http://localhost:8080/newpost/", {title: title})
        console.log(a);
    }
  return (
    <div>
        <h4>Title</h4>
        <input type="text" onChange={handleTitle} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default NewPost