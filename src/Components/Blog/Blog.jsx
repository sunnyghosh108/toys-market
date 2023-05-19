import React from 'react';

const Blog = () => {
    return (
        <div>
             <h3 className='text-center text-blue-500 font-bold text-5xl'>Some Question and answer solve</h3>
        <div className='bg-orange-300 gap-10 m-6'>
            <div>
           <h3 className='text-2xl'> <span className='text-2xl'>Question:1</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
       <p className='text-2xl text-center m-4 '> Access tokens are used in token-based authentication to allow an application to access an API.<br/> The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.<br/> The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.</p>
       <p className='text-2xl text-center m-4 '> <span>Refresh token:</span> It is a unique token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.

          Since access tokens aren’t valid for an extended period because of security reasons, a refresh token helps to re-authenticate a user without login credentials. This Refresh token is never exposed to the client-side Javascript, even if our access token gets compromised it’ll be expired in a very short duration.</p>
      <p className='text-2xl text-center m-4'>The refresh token is used to obtain new access refresh token pairs when the current access token expires. refresh tokens are also used to acquire extra access tokens for other resources. refresh tokens are bound to a combination of user and client, but aren't tied to a resource or tenant. as such, a client can use a refresh token to acquire. App tokens: when an app requests token through wam, azure ad issues a refresh token and an access token. however, wam only returns the access token to the app and secures the refresh token in its cache by encrypting it with the user’s data protection application programming interface  key.</p>
            </div>

           
          <div className=''>
          
          <h3 className='text-2xl '> <span className='text-2xl'>Question:2</span>  Compare SQL and NoSQL databases?</h3>
           <div className="overflow-x-auto ">
       <table className="table w-full ">
    {/* head */}
       <thead>
        <tr>
        <th></th>
        
        <th>SQL</th>
        <th>No SQL</th>
      </tr>
       </thead>
       <tbody>
      {/* row 1 */}
        <tr>
        <th>1</th>
        <td>Stands for Structured Query Language</td>
        <td>Stands for Not Only SQL</td>
        
         </tr>
      {/* row 2 */}
         <tr>
        <th>2</th>
        <td>Relational database management system (RDBMS)</td>
        <td>Non-relational database management system</td>
       
        </tr>
      {/* row 3 */}
        <tr>
        <th>3</th>
        <td>Suitable for structured data with predefined schema</td>
        <td>Suitable for unstructured and semi-structured data</td>
        
      </tr>
        </tbody>
        </table>
        </div>
          </div>
        
       <div>
       <h3 className='text-2xl'><span className='text-2xl'>Question:3</span> What is express js? What is Nest JS?</h3>
       <p className='text-2xl text-center'>  Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

         Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. </p>
       <p className='text-2xl'> Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript</p>
       </div>
      <div>
      <h3 className='text-2xl'> <span className='text-2xl'>Question:4</span>What is MongoDB aggregate and how does it work?</h3>
       <p className='text-2xl'> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

         One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. </p>
      </div>
        </div>
        </div>
    );
};

export default Blog;