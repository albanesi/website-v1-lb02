import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import React from 'react';
import '../index.css'

const BlogDetails = () =>{

    const {id} = useParams();
    const { error, isPending, data: blogs } = useFetch(`http://localhost:8000/blogs/${id}`)
    
    return(
      <div className="center">
        <div className="blog-details">
          {isPending && <div>loading</div>}
          {error && <div>{error}</div>}
          {blogs && (
              <article>
                <h3>{blogs.title}</h3>
                <p>{blogs.body}</p>
              </article>
          )}
           
        </div>
      </div>
    )
}
export default BlogDetails;