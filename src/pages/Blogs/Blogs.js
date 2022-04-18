import React from 'react';

const Blogs = () => {
    return (
        <div className="mt-5 mx-5 container " style={{backgroundColor: 'beige'}}>
            <div>
                <h2>Differece between authorization and authentication</h2>
                <p>Authentication and authorization are the two words used in the security world. They might sound similar but are completely different from each other. Authentication is used to authenticate someone's identity, whereas authorization is a way to provide permission to someone to access a particular resource.Authentication is the process of identifying someone's identity by assuring that the person is the same as what he is claiming for.Authorization is the process of granting someone to do something. It means it a way to check if the user has permission to use a resource or not.It is used by both server and client. The server uses authentication when someone wants to access the information, and the server needs to know who is accessing the information. The client uses it when he wants to know that it is the same server that it claims to be.Authorization is not always necessary to access information available over the internet. Some data available over the internet can be accessed without any authorization, such as you can read about any technology from here.</p>
            </div>
            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.One of the time-saving features that I want to explore in Firebase is its authentication service. When I link my app with Firebase, I might not need to create a separate login interface. To save time, I can use its built-in login UI to sign users into your app.
                Here are many alternative options in the world. AWS apmlify , Purse, couchbase, Back4App etc.
                </p>
            </div>
            <div >
                <h2>What other services does firebase provide other than authentication</h2>
                <p>Firebase is not only provide authentication, it has many service as like , Hosting , backend service, Database, Real time database , Goolgle analytics, Etc.</p>
            </div>
        </div>
    );
};

export default Blogs;