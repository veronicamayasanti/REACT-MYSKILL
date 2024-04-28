import { useState } from "react";

function FavoriteColor() {
    // const [brand, setBrand] = useState("brio");
    // const [model, setModel] = useState("mustang");
    // const [year, setYear] = useState("1964");
    // const [color, setColor] = useState("blue");

    const [car, setCar] = useState({
        brand: "ford",
        model: "mustang",
        year: "1964",
        color: "red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "black" }
        })
    }

    const updateYear = () => {
        setCar(previousState => {
            return { ...previousState, year: "2000" }
        })
    }

    return (
        <>
            {/* <h1>My favorite color is {color} ! </h1>
            <button 
                type="button" 
                onClick={() => setColor("pink")}> Pink 
            </button> */}

            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>

            <button
                type="button"
                onClick={updateColor}>
                Black
            </button>

            <br />

            <button
                type="button"
                onClick={updateYear}>
                2000
            </button>

        </>
    )
}

export default FavoriteColor;