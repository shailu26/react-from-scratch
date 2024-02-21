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
import userLogo from './asset/img/user.png';
const Title = () => <h1>I am Title</h1>;
const Header = () => {
  return (
    <div className="header">
      <div className="logo">R</div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="user">
        <img src={userLogo} />
      </div>
    </div>
  );
};
/**
 *
 * Component composition is when we use component inside component
 */
const Main = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
