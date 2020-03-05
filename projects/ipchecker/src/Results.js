import React, {useContext} from "react"
import {IPInfoContext} from "./context/IPInfoProvider"

function Results(props){
    const value = useContext(IPInfoContext)
    return(
        <div className = "resultsStyle">
            <h2>IP Address: {value.ipAddress} </h2>
            <br/>
            <h2>ISP: {value.ipInfo.isp}</h2>
            <br/>
            <h2>Safe? - {value.ipInfo.bad ? " Is Dangerous" : " Is Safe"} </h2>
            <br/>
            <h2>Type: {value.ipInfo.type}</h2>
            <br/>
            <h2>Country: {value.ipInfo.countryName} </h2>
            <br/>
            <h2>Region: {value.ipInfo.region} </h2>
            <br/>
            <h2>City: {value.ipInfo.city} </h2>
        </div>
    )
}
export default Results