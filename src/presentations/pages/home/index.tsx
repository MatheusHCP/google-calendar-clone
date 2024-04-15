import { useEffect, useState } from 'react';
import { getMonth } from '../../utils';
import CalendarHeader from '../../components/calendar-header';
import Sidebar from '../../components/sidebar';
import Month from '../../components/month';
import useCalendarContext from '../../hooks/useCalendarContext';

export default function Home(){

  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const {monthIndex} = useCalendarContext()

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])



  return (
    <div className='h-screen flex flex-col'>
      <CalendarHeader/>
      <div className="flex flex-1">
        <Sidebar/>
        <Month month={currentMonth}/>
      </div>
    </div>
  )
}