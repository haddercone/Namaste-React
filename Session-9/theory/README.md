# Theory assignment

## 1. How do you create Nested Routes react-router-dom cofiguration

We can create a nested route inside a react router configuration as follows:

We can have a router

```
const reouter = createBrowserRouter([
   {
      path: "/",
      element: <Parent />
      children: [
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can have a nested router for `/path` using `children` again as follows:

```
const reouter = createBrowserRouter([
   {
      path: "/",
      element: <Parent />
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [
               {
                  path: "/child",
                  element: <SubChild />
               }
            ]
         }
      ],
   }
])
```

> Note : Read abt createHashRouter, createMemoryRouter from React Router docs.

## 2. What is the order of life cycle method calls in Class Based Components

Following is the order of lifecycle methods in Class Based Components:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

## 3. Why do we use componentDidMount?

`componentDidMount` is called after our applicatoin components are rendered into the DOM. After that we can run any piece of react code to modify the components.
e.g making API calls inside the rendered componnents.

## 4. Why do we use componentWillUnmount? Show with example

`componentWillUnmount` is usefull for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA the component process always runs in the background even if we switch to another route.So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.

## 5. (Research) Why do we use super(props) in constructor?

`super(props)` is used to inherit the properties and access of variables of the React parent class when we initialise our component.

## 6. (Research) Why can't we have the callback function of useEffect async?

We cannot have the callback function of `useEffect` as async because a `useState` hook expects a clean-up function, it is required to cleanup the effect when the component leaves the page.
If we use `async` that will return us a promise, the promise will affect the clean-up function from bein called.
