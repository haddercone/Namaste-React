## 1. When and why do we need lazy()?

## 2. What is suspense?

Suspence is a component provided by react , it is used to load to add delays when we are performing a dynamic imort in our application.

## 3. Why we got this error :

<code>
A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition
</code>

How does suspense fix this error ?

<p style="color: orange; font-weight:bold;">: TODO :</p>
## 4. Advantages and disadvantages of using this code splitting pattern?

| Advatage                                                                                                                                                                                                                                                      | Disadvatage                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| The code splitting pattern is effective if the budle is big . Having a bin budle size can cause performance issues for the application , because the application will first import all the code that will affect the applicatin performance and loading time. | It is not applicable for server side rendering, When we need to dynamically import the data from server it doesn't work. |

## 5. When do we and why do we need suspense?

When our application grows in size the bundle created by the increases as well. This affects the application performance , when we load a large amount of data when our application loads. So it is better to load the data when we need a specific component to load which is large in size.
