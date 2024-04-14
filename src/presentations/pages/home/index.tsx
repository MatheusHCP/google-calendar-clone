import React, { useEffect, useState } from 'react';
import { getMonth } from '../../utils';
import CalendarHeader from '../../components/calendar-header';
import Sidebar from '../../components/sidebar';
import Month from '../../components/month';

export default function Home(){

  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    console.log(getMonth())
  },[])

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