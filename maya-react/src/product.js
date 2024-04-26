
function Product({ name, price, discont = 0 }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>
                <s>Rp{price}</s> ({discont}%)
            </p>
            <p>
                <b>
                    Rp {parseInt(price) - parseInt(price) * (parseInt(discont) / 100)}
                </b>
            </p>
            <hr />
        </div>
    )
}

export default Product;