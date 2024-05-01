import { useState } from "react";

// function Multiple() {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (e) => {
//         const name = e.taget.name;
//         const value = e.taget.value;
//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(inputs);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label> Masukan nama mu:
//                 <input
//                     type='text'
//                     name="username"
//                     value={inputs.username || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label> Masukan umur mu:
//                 <input
//                     type= 'number'
//                     name="age"
//                     value={inputs.username || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <input type='submit' />
//         </form>
//     )
// }

// export default Multiple;

const MultiInputForm = () => {
    // State untuk menyimpan nilai dari input
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    // Handler untuk mengupdate nilai input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler untuk menangani submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan sesuatu dengan formData, contohnya bisa mengirim data ke backend
        console.log(formData);
        // Reset form setelah submit jika diperlukan
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MultiInputForm;
