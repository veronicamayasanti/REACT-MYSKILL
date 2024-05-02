import { useState } from "react";

function TextArea() {
    const [textarea, setTextarea] = useState(
        "ini content sementara"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (

        <form>
            <textarea value = {textarea} onChange = { handleChange } />
        </form>
    )
}



export default TextArea;