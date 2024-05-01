import { useState } from 'react';

function Form() {
    // form pada HTML
    // return (
    //     <form>
    //         <label>Masukan namamu: <br/>
    //             <input type='text' />
    //         </label>
    //     </form>
    // )

    // pada react seperti berikut:
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert (`hallo ${name} senang kamu disini`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Masukan nama mu: 
                <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type='submit'/>
        </form>
        
    )
}

export default Form;