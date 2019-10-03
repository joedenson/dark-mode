import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    //Call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a const

    const [dark, setDark] = useLocalStorage(key, initialValue);

    useEffect(() => {

        if (dark) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [dark])
    return [dark, setDark];
}

export default useDarkMode;

