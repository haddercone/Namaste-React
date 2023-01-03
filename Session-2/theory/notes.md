## 1. What is a bundler?

A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser

For example:  
1. parcel 
2. webpack (used by `create-react-app`) and
3. vite ( prounounced as veet)



## 2. Parcel:

Parcel is a bundler used for development and productions purposes.

## Parcel Features:

* HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* MINIFY
* BUNDLING
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* does image optimization also
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* port Number
* Consistent hashin algorithm
* Zero Configuration

###  installation commands:

1. Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

2. Parcel Commands :

- For development build:
```
npx parcel <entry_point> 
```
- For production build :
```
npx parcel build <entry_point> 
```

## 3. Why react is fast?

It is not only the virtual DOM that makes React faster but other components like bundlers (e.g. parcel, webpack ,vite etc. ) and development ecosystme also.  

## 4. Transitive dependencies:
It is a type of dependency where one dependency requires another dependency to work properly and another dependency requires an another dependecy.
