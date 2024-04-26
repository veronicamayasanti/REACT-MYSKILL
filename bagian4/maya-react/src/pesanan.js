function Pesanan() {
    const makanan = (a, b) => {
        alert(b.type);
    }
    return (
        <div>
            <h3>tekan tombol dibawah ini yaaa</h3>
            < button onClick={(event) => makanan('mau pesan apa', event)} > pesan disini </button >
            <br />
            < button onClick={(event) => makanan('adanya makan saja', event)} > makan aja ya </button >
        </div>

    )
};

export default Pesanan;