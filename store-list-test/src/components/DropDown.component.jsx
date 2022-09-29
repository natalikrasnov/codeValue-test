import { useState } from "react"

export function DropDown({ options, defaultValue, onSelect }) {
    const [sortBy, setSortBy] = useState(defaultValue)

    const onChange = (e) => {
        setSortBy(e.target.value)
        onSelect(e.target.value)
    }

    return (
         <label className="drop-down">
            sort by  
            <select value={sortBy} onChange={onChange }>
                {
                    options
                    &&
                    Object.keys(options).map((key, i) => <option value={key} key={i}>{options[key]}</option>)
                }
            </select>
        </label>
    )
}