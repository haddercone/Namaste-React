# Theory assignment

## What are various ways to add images into our App? Explain with code examples

There are various ways by which we can import the images in our app:

1. Using URL:

   We can simply import an image using a URl
   e.g.

   ```
   <img src="url-of-image" />
   ```

2. Using default import:

   If we have an image on our systme , we can import using default import.
   e.g.

   ```
   import image from "/path/of/image";

   ...

   <img src={image} />
   ```

## What would happen if we do console.log(useState())?

Calling `console.log(useState())` returna us a value and a function. If we do not provide anything inside `useState` it returns `undefined` and a function.

## How will useEffect behave if we don't add a dependency array ?

If we do not provide a dependency array in use state , the `useEffect` hook will bee called at each re-render of the component.

## What is SPA?

A `SPA` is a single page application that uses client side rendering to load the pages. A SPA does not require to call the server end for rendering the application or switching the pages.

## What is difference between Client Side Routing and Server Side Routing?

- A Client side Routing is a type of routing where the routing occurs at the client without making any calls to server side. To swich between different pages in an aplication the application is not required to make any sever side call to show the pages, since the page is already present on the clinet side.

- A server side routing is a type os routing where the application needs to call for the resources ffrom the server side.
