// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import UserProfile from './UserProfile.js'
import './App.css';



const App = function(props) {
  return (
    <div className='App-header'>
      {
        // ["","","",""].map(function() {
        //   return <UserProfile />
        Array(20).fill("").map(function() {
          return <UserProfile />
        })
        //by filling an array with empty strings, we can populate our
        //app with many different instances of the same component
      }
    </div>
  )
}

export default App;


//functions can't return two expressions:
// eg return (
//  <UserProfile />
//  <UserProfile />
// ) 
//therefore, to use sibling elements, you must wrap them in a singular div
//so the function returns only one expression.
// eg return (
//   <div>
//     <UserProfile />
//     <UserProfile />
//   </div>
// )
//but really we should use JS to programatically account for
//the component instantiation/rendering