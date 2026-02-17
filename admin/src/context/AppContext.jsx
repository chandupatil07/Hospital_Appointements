import {createContext} from 'react';

export const AppContext = createContext()

const AppContextProvider=(props)=>{

const currency = '$'

    const calculateAge=(dob) =>{
        const today = new Date()
        const birthDate = new Date(dob)

        let age =today.getFullYear()-birthDate.getFullYear()
        return age

    }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const slotDateFormat = (slotDate) => {
  const dateArray = slotDate.split("-")   // ✅ use -

  const day = dateArray[0]
  const month = Number(dateArray[1]) - 1   // month index fix
  const year = dateArray[2]

  return day + " " + months[month] + " " + year
}



    const value={
        calculateAge,
        slotDateFormat,
        currency
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider








