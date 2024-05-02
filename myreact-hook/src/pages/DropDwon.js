import { useState } from "react";

function DropDwon() {
    const [myName, setMyName] = useState("maya");

    const handleChange = (event) => {
        setMyName(event.target.value)
    }

    return (
        <form>
            <select value={myName} onChange={handleChange}>
                <option value="veronica">veronica</option>
                <option value="maya">maya</option>
                <option value="santi">santi</option>
            </select>
        </form>
    )
}

export default DropDwon;