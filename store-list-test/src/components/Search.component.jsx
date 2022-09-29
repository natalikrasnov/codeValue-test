export function Search({ onChange, placeholder }) {
    return (
        <label className="search">

            <input
                placeholder={placeholder}
                onChange={onChange}
            />
         </label>        
    )
}