import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center text-blue-500 font-bold text-5xl'>Some Question and answer solve</h3>
            <div className='bg-amber-500 text-center m-10'>
                <h3> <span>Question:1</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p className='text-center m-4'> Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.</p>
            <p> </p>

            </div>
        </div>
    );
};

export default Blog;