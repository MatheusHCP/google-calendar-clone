import dayjs from "dayjs";
import { PropsWithChildren, createContext, useState } from "react";


export const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},

});

const CalendarContextWrapper = ({children} : PropsWithChildren) => {

  const [monthIndex, setMonthIndex] = useState(dayjs().month())



  return (
    <CalendarContext.Provider value={{monthIndex, setMonthIndex}}>
      {children}
    </CalendarContext.Provider>
  )

}

export {CalendarContextWrapper}
