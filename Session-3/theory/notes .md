## 1. Writing Scripts in package.json.
<hr>

### Q. What converts New Code to Older Code(For older version Browsers)? 

A: Babel , We do not need to write polyfill. Babel does it automatically.

<hr>

`npx` - executing commands without downloading packages
npm - will download required packages

> Note: Parcel will not remove console.log automatically. We need to configure for it. There is a package for it, named `babel-plugin-transform-remove-console` either from babel website or npmjs website: 

command : 
```
npm install babel-plugin-transform-remove-console --save-dev /-D
```

Usage: 

    1.via .babelrc (recommended) : 
    2. via CLI
    3. via NodeAPI

## 2. React-key Reconciliation :
When there are siblings in an array, we need to give keys for each sibling

>  **HW**: Read about React-key Reconciliation from React Docs.

## 3. Babel 

React.createElement gives us an Object, which is then converted to html and puts into DOM

Flow: 

```
React.createElement => Object => HTMl(DOM)
```
> **HW** : Difference between **HTML** and **JSX**

JSX uses React.createElement (behind the scenes), which gives Object, and then into HTML, and it is put into DOM
Babel does it. Babel converts JSX. JSX was developed by Facebook.

Flow: 
```
JSX => React.createElement => Object => HTMl(DOM)
```
Babel converts JSX into React.createElement

> NOTE: Babel is must to use JSX .


<hr>

### Q. Is JSX HTML inside JS?

A:  No,  JSX is a HTML like Syntax, and not HTML inside JS.

<hr>

Bable Compiler for JS.
Read Babel Docs at [babeljs.io](https://babeljs.io)
<br><br>
> **HW :** Play with Babel in it's website.
Also Go to it's GitHub Repo, and read about its algorithms.

Babel comes along with Parcel.


## 4. React Component types:

1. Functional Component- NEW
2. Class Based Component - OLD

### **Functional Component** is just a normal function that returns some piece of JSX, or a react element, or a function. 
Name of a Component starts with a Capital Letter (not mandatory, but good practice to use)
If we have to write multiple lines to be returned in a component, we need to use () and ; at the end.

> For Homework, use Normal Convention.


## 5. Diff b/n React Element & React Component:

React Element is returns an Object.
React Component is a function that returns JSX, or a react element, or a function.

Syntax When rendering:
- **For React Element:**

    We use `root.render(element_name);`


- **For React Component:**

     We use Angular brackets: `root.render(\<ComponentName />);`

 Any piece of Javascript code can be written within {} 

> XSS - Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.

> JSX takes care of XSS.

<hr>

Q: Component Composition:

A: Writing/ Passing component inside component.

<hr>

>Home Work:
>1. Read about React-key Reconciliation from React Docs.
>2. Do Whatever Akshay did in the Session.

