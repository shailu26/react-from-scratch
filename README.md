# Learning React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Build Faster
- Image Optimization
- Bundling 
- Minification
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Dev & Prod Bundler

/**
 * Food App - Yummmy
 * Header
 *    - Logo
 *    - Nav Items
 *        - Home
 *        - About us
 *        - Cart
 * Body
 *    - Search
 *    - Restaurent Container
 *        - Card
 * Footer
 *    - CopyRight
 *    - Contact Us
 *    - Link
 */

# Two Type of Export/Import

- Default Export 

    * export default Component

- Default Import
  
    * import Component from 'path'

- Named Export

    * export <name of variable> e.g -> export const a = 1;

- Named Import 

    * import {a} from 'path;

# React Hooks

- Normal JS Function with SuperPower

- useState -> Component Local JS Variable => Super Powerful Variable

# Reconciliation Algorithm (After v16 Known as React Fiber)

- Virtual Dom -> is a Representation of Actual DOM

* When state changes Virtual Dom Compare previous dom & NEW dom to apply the changes..that is called Diff Algorithm or React Fiber