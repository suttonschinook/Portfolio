import React, {useState} from "react"
export const IPInfoContext = React.createContext()

export default function IPInfoProvider(props){
    const [ipInfoState, setIpInfoState] = useState({
        ipAddress: "",
        ipInfo: {
            bad: "",
            type: "",
            countryName: "",
            city: "",
            region: "",
            isp: ""
        },
        center: {lat: 40.765890, lng: -111.888768,}, 
        zoom: 10,
    })
    function updateIPInfo(data){
        console.log(data)
        setIpInfoState(prev => ({
            ...prev,
            ipAddress: data.ip,
            ipInfo: {
                bad: data.bad,
                type: data.type,
                countryName: data.countryName,
                city: data.city,
                region: data.region,
                isp: data.isp  
            },
            center: {lat: data.latitude, lng: data.longitude}, 
        }))
    }
    return(
        <IPInfoContext.Provider
            value={{
                ...ipInfoState, updateIPInfo
            }}>
            {props.children}
        </IPInfoContext.Provider>
    )
}