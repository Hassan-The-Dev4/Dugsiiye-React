


const Greeting = ({currentUser, Role, age}) => {
    return (
        <>
        <h1>Hello, {currentUser}</h1>
        <span>Your role is : {Role}</span><br />
        <span>Your age is : {age}</span>
        </>
    )
}

export default Greeting;