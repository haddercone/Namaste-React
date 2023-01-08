# Theory Assignment

## 1. IS JSX medatory for React?
- JSX is a syntext that is used for writing better and clean code insted of writing code using `React.CreateElement`. It is not required for React.

## 2. Is ES6 mendatory for React?
- React is written in  JavaScript so it is not required to follow ES6 syntex to code in React.

## 3. How can I write comments in JSX?
- JSX comments are written as follows:

    - `{/*  */}` - for multiline comments
    - `//` - for single line comment

## 4. What is <React.Fragment></React.Fragment> and <></> ?
- `React.Fragment` is a functional component that is provided by rect. `<React.Fragment></React.Fragment>` is an empty tag that does not create extra `div` tag.

- `<></>` and `<React.Fragment></React.Fragment>` are similer tags. We can use empty tags in place of `<React.Fragment></React.Fragment>` as well.

## 5. What is Virtual DOM?
- Virtual DOM is representation of th DOM.
## 6. What is Reconciliation in React?
- Reconciliation is a process, where react uses it's diffing algorith to find the differece between the trees to render the changes.
## 7. What is React Fiber?
- React fiber is a new reconciliatoin engine in React 16.
## 8. Why we need keys in React? When do we need keys in React?
- Keys are the unique identifire through which react knows, how to render a perticuler component.

- Keys are required when a paarent tag has two or more similer tags in it, so that react can update the component which is needed to be updated without destroying the whole paarent component. It improves the effieciency of the application.

## 9. Can we use index as keys in React?
- Yes, we can use the indexes in places of keys, but it is not considered as a good practice to use them. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incomming data react may reander them in unusual order.
## 10. What is props in React? Ways to 
- Props or properties are just parameters that React component uses for any operation.
## 11. What is a Config Driven UI ?
- Config driven UIs are based on the configuarions of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. 