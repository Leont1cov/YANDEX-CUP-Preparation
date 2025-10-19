type GreetingProps = {
    name: string;
}

export default function MyInput () {
    // React.ChangeEvent<HTMLInputElement> - указываем, что событие произошло в input - теперь он знает его value
    function handleChange(e: React.ChangeEvent<HTMLInputElement>):void { //e - объект события (event)
        console.log(e.target.value);
    }
    return <input onChange={handleChange} />;
}

function SaveButton ({ name }:GreetingProps) {
    // React.MouseEvent<HTMLButtonElement> - всё точно также как и с React.ChangeEvent<HTMLInputElement>
    function handleClick (e: React.MouseEvent<HTMLButtonElement>):void {
        e.preventDefault();
    }
    return <button onClick={handleClick}>{ name }</button>
}

