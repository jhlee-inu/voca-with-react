import React from 'react';
import World from './world';
const Hello = () => {
    function showName() {
        console.log('Mike');
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Hello</h1> 
            <button onClick={showName}>show me</button>
            <button
            onClick={()=>{
                showAge(10);
                }}
                >
                    show age
                </button>
                <input type='text' onChange={(e)=>
                    console.log(e.target.value)
                }/>
            </div>
    );
};
export default Hello;