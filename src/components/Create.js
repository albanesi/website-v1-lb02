import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react';
import './index.css'

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[loading, setLoading]= useState(false);
    const history = useHistory();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};
        console.log(title,body,author)

        setLoading(true);
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:  JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setLoading(false);
            history.push('./');
        })

        
    }

    
    return (  
        <div className="create">
            <h2>Add a new block</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                type="text" required 
                onChange={(e)=> setTitle(e.target.value)}>
                </input>
                <label>Blog body</label>
                <textarea 
                type="text" required onChange={(e)=>setBody(e.target.value)}/>
                <label>Blog author</label>
                <select  required onChange={(e)=>setAuthor(e.target.value)}> 
                    <option value={null}>Bitte wählen Sie aus</option>
                    <option value="other">other</option>
                    <option value="alban">alban</option>
                </select>
                {!loading&&<button>Add blog</button>}
                {loading&&<button disabled>Adding the blog..</button>}

            </form>
        </div>
    );
}
 
export default Create;