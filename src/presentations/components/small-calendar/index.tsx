import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react"
import { getMonth } from "../../utils";
import useCalendarContext from "../../hooks/useCalendarContext";

export default function SmallCalendar() { 

  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const {monthIndex, setSmalCalendarMonth, setDaySelected, daySelected} = useCalendarContext()

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex])

  useEffect(() => {
    setCurrentMonthIndex(monthIndex)
  }, [monthIndex])
  


  function handlePrevMonth(){
    setCurrentMonthIndex(currentMonthIndex - 1)
  }
  

  function handleNextMonth(){
    setCurrentMonthIndex(currentMonthIndex + 1)
  }

  function getCurrentDayClass(day: Dayjs){
    const format = "DD-MM-YYYY"
    const nowDay = dayjs().format(format)
    const currDay = day.format(format)
    const slcDay = daySelected && daySelected.format(format)

    if (nowDay == currDay){
      return "bg-blue-500 text-white rounded-full"
    }

    if(slcDay == currDay){
      return "bg-blue-100 rounded-full text-blue-600 font-bold"
    }

  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button key={idx} onClick={() => {
                setSmalCalendarMonth(currentMonthIndex)
                setDaySelected(day)
              }} className={`py-1 w-full ${getCurrentDayClass(day)}`}>
                <span className="text-sm">
                  {day.format('D')}
                </span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
