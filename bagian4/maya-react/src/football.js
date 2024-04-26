function FootBall() {
    const shoot = (a) => {
        alert(a);
    }
    return (
        <div>
            <h3>tekan tombol dibawah ini yaaa</h3>
            < button onClick={() => shoot('ini goal a pertama')} > Take the shot! </button >
            <br/>
            < button onClick={() => shoot('ini goal a kedua')} > Take the shot! </button >
        </div>

    )
};

export default FootBall;

