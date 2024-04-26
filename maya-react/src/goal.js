function MissedGoal() {
    return <h1>MISSED</h1>
}

function MadeGoal() {
    return <h1>GOAL..!!!</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;
    // if(isGoal){
    //     return <MadeGoal/>
    // }else{
    //     return <MissedGoal/>
    // }
    // cara biasa
    // ini cara ternary operasi

    return (
        <>
        {isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    )
}



export default Goal;