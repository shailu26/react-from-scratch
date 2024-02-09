/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>hello</h1>
 *  </div>
 * </div>
 * ReactElement(Object) ==> HTML (Browser Understands)
 */

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, React.createElement('h1', {}, 'hello'))
);
console.log(parent);
// const heading = React.createElement('div', { id: 'child' }, 'Hello world from React!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
