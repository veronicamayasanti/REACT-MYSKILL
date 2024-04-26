function Car(props) {
    return <li>i am a {props.brand}</li>;
}

function Garage() {
    const mobil = [
        {id: 1, brand: 'ford'},
        { id: 1, brand: 'bmw' },
        { id: 1, brand: 'audi' }
    ];
    return (
        <>
        <h1>who lives in my garage?</h1>
        <ul>
            {mobil.map((mobil) => <Car key={mobil.id} brand={mobil.brand}/>)}
        </ul>
        </>
    )
}

export default Garage;