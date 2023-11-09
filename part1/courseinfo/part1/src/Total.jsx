const Total = (props) => {
    return (
        <p>Number of Exercises {props.exercises.reduce(function(a, b) { return a + b; }, 0)}</p>
    )
}

export default Total