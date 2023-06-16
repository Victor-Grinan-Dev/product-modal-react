# Email-Subscribe 
- this is a mini project to learn tailwind css.

## steps I followed to start this project:
1- type in terminal:
```cmd
npm install -D tailwindcss
```
2- type in terminal:
```cmd
npx tailwindcss init
```
3- add this to the index.css file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4- in the tailwind.config.js write this:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5- finally fix the babel bug by installing:
```cmd
npm i -D @babel/plugin-proposal-private-property-in-object
```