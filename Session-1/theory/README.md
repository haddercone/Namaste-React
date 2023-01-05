# Theory Assignment
## Q 1.  What is **emmet**?

Emmet is a plugin for text editors like VS Code that allows users to code faster.

For example in a HTML file:

1. `html:5 ` gives :

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```
2. `div>div>p` gives :

```
<div>
    <div>
        <p></p>
    </div>
</div>

```

## Q. 2. Difference between a Library and Framework?

A library is a piece of code that we can incorporate in our exixsting project via a CDN or as a package. A liberary does not affect our project structure. whereas a framework is a structured set of librraries and packages implementing a perticular methodology that we have to follow to create a project. 
## Q 3. What is **CDN**? Why do we use it?

CDN is known as `Content delivery network`  that provides us different type of assets / features / libraries  created by others over the internet. Using a CND reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CND.
## Q 4. Why react is called React?

React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

## Q 5. What is **crossorigin**  in React?

Cross-origin resource sharing (CORS) is an HTTP based machenism that allows a server to indicate any origin other than its own from which the browser should permit loading the  resources.

## Q 6. Difference between React and React DOM

React is used to create views while React Dom is used to render components in the web UI.

## Q 7. What is difference between react.development.js and react.production.js files via CDN?

`react.development.js` is used for development purpose and the code is not compressed while `react.production.js` is used for production purposes and the code for this library is compressed.
## Q 8. What is the difference between `async` and `defer` ?

`async` and `defer` are boolean attributes which are used along with the `script` tag to load the external scripts efficiently in our we page.

Differences between `async` and `defer`.

| Difference  |      async      |  defer |
|-------------|-----------------|--------|
| code | `<script async src = '...'></script>`  |  `<script defer src = '...'></script>`|
| Loading sequence | Does not guarantee the execution sequense of the script    | Guarantees the execution sequence of scripts in wich they are ordered.   |
| Execution sequence | Loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes.  | Loads the scripts while HTML is being rendered. Executes the scripts only after the HTML is completely rendered
