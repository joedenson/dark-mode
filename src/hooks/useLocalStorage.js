import { useState } from 'react';



const useLocalStorage = (key, initialValue) => {

    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    //Remember we're trying to use this hook like this: const [name, setName] = useLocalStorage('name', 'Dustin'). So far we have made the value part of the hook, but not the setter. Let's go ahead and create a setter function, and return that in the array as well.
    //inside the hook, write a function called setValue that takes a value parameter
    // In setValue, set the value to localStorage using the key that was passed into the hook itself
    // Also, update the state of storedValue with value as well
    //Add setValue to the array that is being returned out of this hook

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));

    };




    //return storedValue from this hook in an array:
    return [storedValue, setValue];
}

export default useLocalStorage;



