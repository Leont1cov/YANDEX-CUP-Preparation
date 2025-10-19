type GreetingProps = {
    name: string;
    age?: number;
}

const Greeting = ({ name, age }:GreetingProps) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            {age !== undefined && <p>Your age: {age}</p>}
        </div>
    )
}
export default Greeting;