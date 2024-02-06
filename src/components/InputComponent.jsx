import { useRef, useState } from "react"

const InputComponent = () => {
    const [inputs, setInputs] = useState([])
    const inputRef = useRef(null)
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button type="submit" onClick={() => {setInputs([...inputs, inputRef.current.value])}}>Submit</button>

            <h2>Records</h2>
            {inputs.map((item,index) => {return <h3 key={index}>{item}</h3>})}
        </div>
    )
}

export default InputComponent
