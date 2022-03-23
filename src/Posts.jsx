import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Posts() {
    const [post, setPost] = useState("");

    const getPost = async (id) => {
        const postItem = await axios.get("http://localhost:8080/getsinglepost/" + id);
        setPost(postItem.data);
    };

    const deleteCurrentPost = async (id) => {
        const deletePost = await axios.delete("http://localhost:8080/deletepost/" + id);
    }

    useEffect(() => {
        fetch("http://localhost:8080/getallposts")
            .then((res) => res.json())
            .then((json) => setPost(json[0]))
            .catch((e) => console.log(e));
    }, []);

  return (
    <div>
        <div>
            <h4>Title</h4>
            <p>{post.title}</p>
        </div>
        <div>
            {
                post.prev ? <button onClick={() => getPost(post.prev)}>Previous</button> : <button disabled>Previous</button>
            }
            <button onClick={() => deleteCurrentPost(post.post_id)}>Delete</button>
            {
                post.next ? <button onClick={() => getPost(post.next)}>Next</button> : <button disabled>Next</button>
            }
        </div>
    </div>
  )
}

export default Posts