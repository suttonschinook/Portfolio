import React, {useState} from "react"

export const PortfolioContext = React.createContext()

export default function PortfolioProvider(props){
    const [portfolioState, setPortfolioState] = useState({
        date: "",
        hour: 0,
    })
    function currentDate(){
        const today = new Date()
        const time = today.getHours()
        setPortfolioState({
            date: today.toDateString(),
            hour: time,
        })

    }
    return(
        <PortfolioContext.Provider
            value={{...portfolioState, currentDate}}
        >
            {props.children}
        </PortfolioContext.Provider>
    )
}