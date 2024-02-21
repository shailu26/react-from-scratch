/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>hello</h1>
 *  </div>
 * </div>
 * ReactElement(Object) ==> HTML (Browser Understands)
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX -> HTML like Syntax

// JSX (Transpiled before it reaches the JS) = Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLELEMENT(render)
const jsxHeading = (
  <h1 id="jsx-heading" className="jsx-heading">
    Hello From JSX
  </h1>
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);
