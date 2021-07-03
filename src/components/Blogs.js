
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from 'react';


const Blogs = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

/*function datan(){
        return (
            [
                { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
                { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
                { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
            ]
           ) 
    }*/
    // import { useState, useEffect } from "react";
// import  BlogList  from "./BlogList.js";
// import useFetch from "./useFetch.js";
// const Home = () => {

//     const{information,error,isLoading} = useFetch('http://localhost:8000/blogs');
    
    


    
// return (
// <div className="home">
//     {error && <div>{error}</div>}
//     {isLoading && <div>Loading...</div>}
//    {information && <BlogList blogs={information} title="All Blogs"/>} 
// </div>
// );
// }
export default Blogs