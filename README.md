# QuiZ APP

## Lesson

### Context API

    - this is used to eliminate the props fro big state management that require a lot of states
    - this share a values between components without passing a props

    - This is designed for global state management where you can change the state from the parent tohe siblings
    -- Using Context we can avoid using props
    - context let us pass a deep value into the components tree

    -this is should use if the data needs to be accessed in different components
    -this is not used if only one components need to be pass a data
    - this is a essential toool
    - this is used to share states in your application

    - this is used to pass and use data what ever conponents it is without using props
    - this is created to consume data to make it easier
    - so it should be put on the data that is not updated often
    - this is similar to a global variable
    - it solves props drilling that is the props nested to a different components

## Example of Props Drilling ##

```js
<Header theme={theme} />
<Main theme={theme} />
<Sidebar theme={theme} />
<Footer theme={theme} />

```

The problem is we are passing a props that doesnt need immediately
The Header component doesn't need theme other than to pass it down to its child component. In other words, it would be better for User , Login and Menu to consume the theme data directly.

## Using React Context ##

1. Create context using createContext
2. Wrap the createContext to a Context Provider
3. Put a value on the context provider
4. Read the value in any components using the contextAPI

```js
        const userContext = createConntext()

        <userProvider value = {{states}}>
            <User />
        <userProvider>

        const {states} = useContext(userContext)
 ```

## Story

    So we create a Pig cage (createContext) for the pigs we want to take care of
        
        const pigContext = createConntext()

    then we call the provider of the Pig cage to provide a packaged food to feed the pig
  
        <pigContext.Provider value = {{food}}>
            <Pig />
        <pigContext>

    then we get the packge from the pig provider using a truck , then we unwrap it and feed it to the pig
        
        const {food} = useContext(pigContext)

            <pigMouth>{food}</pigMputh>

    -This let us create our own custom hooks
    - stop the repition of props or props drilling


Always rember props drilling frist before the context


insidet he provider, once there is only one need to be updated, it will re render all of the state

https://www.freecodecamp.org/news/react-context-for-beginners/
https://www.freecodecamp.org/news/author/reed



## Grid ##

 -use grid for layout
- use  flex to align inside the grid
- this holds all the grind items, this container usually used display grid
- this is used to create 2 dimentional layout

grid-template-columns: sizes of the grid