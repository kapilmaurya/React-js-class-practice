import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import Another,{Body} from './components/Body'
import { Component } from 'react';
import Mystate from './components/State';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function CustomApp(){
//   const children=<ul>
//     <li>Hello !</li>
//     <li>Kapil</li>
//     <li>Let's Write a code</li>
//   </ul>
//   return (<div className='app'>
//     <Header ></Header>
//     <Body children={children}/>
//     <Footer/>

//   </div>)
// }

class CustomApp extends Component{
  render(){
    return <>
    <Mystate/>
    </>
  }
}

export default CustomApp;
