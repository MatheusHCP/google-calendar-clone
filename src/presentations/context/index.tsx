import { PropsWithChildren } from "react";
import { CalendarContextWrapper } from "./CalendarContext";

export default function Context({children} : PropsWithChildren){
  return (
    <CalendarContextWrapper>
      {children}
    </CalendarContextWrapper>
  )
}