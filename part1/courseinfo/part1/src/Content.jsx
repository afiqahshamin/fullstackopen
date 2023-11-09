const Part = (props) => {
    return (
        <p>{props.part} {props.exercise}</p>
    )
}

const Content = (props) => {
    return (
        <>
            {props.parts.map((part, index) => (
                <Part key={index} part={part} exercise={props.exercises[index]}/>
            ))}
        </>
    )
}

export default Content