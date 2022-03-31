import axios from 'axios';
import React, { useState } from 'react'

function NewPost() {
    const [title, setTitle] = useState("");
    const [isCurrentDate, setIsCurrentDate] = useState(false);
    const [date, setDate] = useState();

    const handleTitle = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    console.log(window.location.pathname);

    const handleSubmit = async () => {
        if(window.location.pathname === "/newpost/middle") {
          await axios.post("http://localhost:8080/newpost/middle", {title: title, date: date})
        }
        else {
          await axios.post("http://localhost:8080/newpost/", {title: title, date: date})
        }
    }

    const setDateee = (e) => {
      if(e.target.value === "choose_date") {
        setIsCurrentDate(true);
      } else{
        setIsCurrentDate(false);
        var today = Math.floor(new Date().getTime());
        setDate(today);
      }
    }

    const setChooseDate = (e) => {
      var today = Math.floor(new Date(e.target.value).getTime());
      setDate(today);
    }
  return (
    <div>
        <h4>Title</h4>
        <input type="text" onChange={handleTitle} />
        <div onChange={(e) => setDateee(e)}>
          <input type="radio" id="html" name="fav_language" value="choose_date" />
          <label for="html">Choose Date</label>
          <input type="radio" id="css" name="fav_language" value="current_date" />
          <label for="css">Current Date</label><br/>
        </div>
        {
          isCurrentDate && 
          <div onChange={(e) => setChooseDate(e)}>
            <label for="birthday">Choose Date:</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
        }
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default NewPost