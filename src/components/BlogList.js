import { useState,react } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from 'react';
import './index.css'

const BlogList = ({blogs,title}) => {
const history = useHistory();


const getIddeletedata=(id)=>{

    fetch(`http://localhost:8000/blogs/${id}`, {
        method:'DELETE',
        headers: {"Content-Type":"application/json"},
    }).then(()=>{
        console.log(`blog deleted${id}`,);
        window.location.reload(false);
    })
}
    

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog)=> (
        <div className="blog-preview" key={blog.id}>
           <Link to={`/blogs/${blog.id}`}>
           <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            </Link>
            {blog&&<button onClick={()=>getIddeletedata(blog.id)}>delete blog</button>}
        </div>
    ))}
    </div> );
}
 
export default BlogList;