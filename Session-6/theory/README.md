# Theory assignment.

## What is a Microservice?

A microservice is an unique entity that provides a unique service to an application. It can be a database, a server or a UI of the application. These microservices are connected via APIs to make a complete application and are separated from each other as a different application in itself.

## What is Monolith architecture?

A monolith architecture is a entire application consisting of all the services inside of it.
E.g an application which has a UI backend database into a single code base.

## What is the difference between Monolith and Microservice?

| Monolith                                | Microservice                                     |
| --------------------------------------- | ------------------------------------------------ |
| Every service is inside the application | Services are scattered                           |
| Single code base                        | Code base is divided into separated applications |
| Hard to maintain                        | Easy to maintain                                 |
| Deployment takes more time              | Deployment is easy                               |

## Why do we need a useEffect Hook?

`useEffect` is a Hook provided by react . This hook is responsible for maintaining the state of the application when anything that triggers this hook changes.
The useEffect hook conatins two arguments a callback functin and a dependency array.
eg.
`  useEffect(() => {}, [])`

The `() => {}` in the function is called a callback function and `[]` is called a dependency array. If anyhting that we pass inside the `[]` changes the callback function is triggered and changes the state of the application.

> Note: If we do not pass empty dependency array then the useEffect hook only runs when the UI is rendered for the first time.

## What is Optional Chaining?

Optional chaning is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a key error, it returns `undefined`.

## What is Shimmer UI?

Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

## What is the difference between JS expression and JS statement

- A JS expression returns a value that we use in the application. e.g. : `isOdd ? true : false` returns us a `true` or `false` value based on isOdd value
- A JS statement, however does not return a value e.g
  `  let a = 10;`
  does not return a value.

## What is Conditional Rendering, explain with a code example.

A conditional rendering is a way of rendering components based on the a state. If the condition is true for a component, then it gets rendered; otherwise, the other component is rendered.

For example : We load a shimmer UI before our component is loaded completely.
We can create a state variable that will keep the value of our current application state.
i.e.

```
  const [isLoaded, setIsLoaded] = useState(false)
```

In the above example, we are creating a state variable that is initially set to false, since our data has not been loaded in our application yet.

Untill our data is loaded completely we can show a shimmer UI to the user and when our data gets loaded we can render the data on the page.
The conditional rendering is done via a ternery operator `?:`
for example :

```
isLoaded ? <Body /> : <Shimmer />
```

In the above expression, if `isLoaded` is set to `false` then, `Shimmer` component will be loaded , when the data loading is completed, the `Body` component will be rendered.

## What is CORS?

**CORS** stands for _Cross Origin Resource Sharing_ , It is a header based machanism that allows a server to indicate any origin other that it's own.
We can create requests to other domains or ports to get the data from our browser.

## What is async and await?

async/await` is a method of making asynchronous requests to a API. Using these we can utilise a API request in our application.

## What is the use of `const json = await data.json();` in getRestaurants()

- ### : TODO :
