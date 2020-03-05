import React, {useContext, useState} from 'react'
import {IPInfoContext} from "./context/IPInfoProvider"
import './styles.css'

export default function IPChecker(){
    const value = useContext(IPInfoContext)

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.iplegit.com/full?ip=${input}`)
        .then(response => response.json())
        .then (response => {
            value.updateIPInfo(response)
        })
    }
    const handleChange = (e) => {
        const {value} = e.target
            setInput(value)
    }
 
    return(
        <div>
            <form className = "formStyle" onSubmit = {handleSubmit}>
                <input className = "inputStyle"
                    type ='text'
                    placeholder = 'Enter the IP Address you wish to check'
                    value = {input}
                    onChange = {handleChange}
                />
                <br/>
                <button className ="buttonStyle">Check IP Address</button>
            </form>
        </div>
    )
}
