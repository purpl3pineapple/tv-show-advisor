import { useState } from "react";
import serachBarStyle from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export const SearchBar = ({onSubmit}) => {

    const [value, setValue] = useState("");

    const submit = (e) => {

        if(e.key === 'Enter' && e.target.value.trim() !== ''){
            onSubmit(e.target.value);
            setValue("");
        };
    };

    const detectChange = (e) => setValue(e.target.value);


    return (
        <>
            <SearchIcon 
                size={27} 
                className={serachBarStyle.icon}
            />
            <input 
                type="text"
                onKeyUp={submit}
                onChange={detectChange}
                className={serachBarStyle.input}
                value={value}
                placeholder="Search for a TV show you may like"
            />
        </>
    );
}