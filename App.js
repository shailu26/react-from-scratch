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

const Title = () => <h1>I am Title</h1>;

/**
 *
 * Component composition is when we use component inside component
 */
const Main = () => {
  return (
    <div>
      <Title />
      <div>Main Component</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
