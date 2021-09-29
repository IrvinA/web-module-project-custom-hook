import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    
    const [value, setValue] = useLocalStorage("DarkModeOn", initialValue);

    const toggle = e => {
        e.preventDefault();
        setValue(!value);
    };

    return([value, toggle]);
}

export default useDarkMode;