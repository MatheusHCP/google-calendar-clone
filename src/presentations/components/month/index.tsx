import React from 'react';
import { MonthType } from './types';
import Day from '../day';

export default function Month({month} : MonthType){
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, index) => (
            <Day day={day} key={index} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}