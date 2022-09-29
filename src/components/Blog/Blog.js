import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
                <div className="card text-bg-light mb-3"        style={{width: "75%"}}>
                 <div className="card-header bg-dark text-white fw-semibold text-center">How does react work?</div>
                    <div className="card-body">
                        <p className="card-text">React separates the whole UI into small segments of codes. These small segments are known as components. Inside the components we write fake HTML code that is known as JSX. Components are similar to JavaScript arrow functions. A component accepts props and through the props we can pass various types of values and functions as well. React creates virtual DOM of the JSX and represents the DOM in the UI.</p>
                    </div>
                </div>
                <div className="card text-bg-light mb-3"        style={{width: "75%"}}>
                <div className="card-header bg-dark text-white fw-semibold text-center">Props vs State in react?</div>
                    <div className="card-body">
                        <p className="card-text">In react we use props to pass data from parent component to the child component. By using props we can pass any form of data and even can pass functions to the child components. However, we cannot change the value of the variable which has passed through props in the child component. That means props are read only. On the other hand, the state of a component is only accessible inside the component and we cannot pass the state from one component to another. Also, the state of a component can be changed.</p>
                    </div>
                </div>
                <div className="card text-bg-light mb-3"        style={{width: "75%"}}>
                <div className="card-header bg-dark text-white fw-semibold text-center">Where can we use the useEffect beside the loading data from API?</div>
                    <div className="card-body">
                        <p className="card-text">The useEffect is a hook that works as a side effect for the react. There are some tasks that react cannot accomplish directly. Those tasks are handled by the useEffect. useEffect tells the react that the component needs to do something after rendering. Apart from loading data, useEffect can be used for validating input field, triggering animation, life cycle methods, etc.</p>
                    </div>
                </div>
        </div>
    )
};

export default Blog;