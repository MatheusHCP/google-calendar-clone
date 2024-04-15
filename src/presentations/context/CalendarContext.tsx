import dayjs, { Dayjs } from "dayjs";
import { PropsWithChildren, createContext, useEffect, useState } from "react";


export const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},

  smallCalendarMonth: 0 as number | null,
  setSmalCalendarMonth: (index: number) => {},

  daySelected: null as Dayjs | null,
  setDaySelected: (day: Dayjs) => {}

});

const CalendarContextWrapper = ({children} : PropsWithChildren) => {

  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [smallCalendarMonth, setSmalCalendarMonth] = useState<number | null>(null)
  const [daySelected, setDaySelected] = useState<Dayjs | null>(null)

  useEffect(() => {
    if(smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth)
    }
  },[smallCalendarMonth])


  return (
    <CalendarContext.Provider value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmalCalendarMonth, daySelected, setDaySelected}}>
      {children}
    </CalendarContext.Provider>
  )

}

export {CalendarContextWrapper}
