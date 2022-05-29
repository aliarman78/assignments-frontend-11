import React from 'react';
import NavBar from '../NavBar/NavBar';

const Blogs = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className='d-flex flex-column align-items-start ms-5 mt-5'>
            <h2>_Difference between javascript and nodejs:</h2>
            <p style={{maxWidth:'800px'}} className='text-justify p-2'>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            <h2>_When should you use nodejs and when should you use mongodb?</h2>
            <p style={{maxWidth:'800px'}} className='text-justify p-2'>
                <span className='font-weight-bold'> When should you use nodejs:</span><br/>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.<br/>
                <span className='font-weight-bold'>when should you use mongodb:</span><br/>SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
            <h2>_Differences between sql and nosql databases:</h2>
            <p style={{maxWidth:'800px'}} className='text-justify p-2'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h2>_What is the purpose of jwt and how does it work?</h2>
            <p style={{maxWidth:'800px'}} className='text-justify p-2'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
        </div>
    );
};

export default Blogs;