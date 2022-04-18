import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className="m-5">
            {
                blogs.map(blog =>
                    <div>
                        <h5>{blog.id}. {blog.ques}</h5>
                        <p>Answer: {blog.ans}</p>
                        <br /><br />
                    </div>
                )
            }
        </div>
    );
};

export default Blogs;