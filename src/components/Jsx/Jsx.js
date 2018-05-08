import React from 'react';
import './Jsx.css';

const Jsx = (props) => {
    const nonJSX = "const element = React.createElement('h1',null,'Hello, world!');";
   const JSX = 'const element = <h1>Hello, World</h1>;';
   const nonJSX_withProps = "const element = React.createElement('h1', { className: 'hello' }, 'Hello, world!');";
   const JSX_withProps = "const element = <h1 className='hello'>Hello, world!</h1>;";
   return(
      <div className='Jsx'>
         <p>As stated in the previous slide. JSX is a syntactical sugar created for the purpose of making React easier to read.<br/>It is entirely possible to code in React without JSX.</p>
         <ul>
            <li>
               {JSX}
            </li>
            <li className='middleElement'>Without Props</li>
            <li>
               {nonJSX}
            </li>
         </ul>
         <p>Both of these are the exact same since babel will compile Jsx to the code displayed on the right.</p>
         <ul>
            <li>
               {JSX_withProps}
            </li>
            <li className='middleElement'>With Props</li>
            <li>
               {nonJSX_withProps}
            </li>
         </ul>
      </div>
  );
}

export default Jsx;
