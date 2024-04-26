function Garasi(props){
    const mobil = props.mobil;
    return(
        <>
            <h1>garasi</h1>
            {mobil.length > 0 && 
            <h2> kamu punya {mobil.length} mobil di garasi</h2>}
        </>
    )
}



export default Garasi;