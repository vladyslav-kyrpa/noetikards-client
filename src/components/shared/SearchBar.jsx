import Button from "./Buttons";
import Icon from "./Icon";
import SearchIcon from "../../assets/icons/search.svg";
import { useState } from "react";

export default function SearchBar({ onSearch, placeholder, initialValue = "", className = "" }) {
    const [value, setValue] = useState(initialValue);

    const style = "flex gap-1 py-2 px-2 bg-surface rounded-item";

    return <div className={`${className} ${style}`}>
        <input className="flex-1 px-2 rounded" type="text" placeholder={placeholder}
            value={value} onChange={(e) => setValue(e.target.value)} />
        <Button onClick={() => onSearch(value)}>
            <Icon src={SearchIcon} size="small" />
        </Button>
    </div>
}