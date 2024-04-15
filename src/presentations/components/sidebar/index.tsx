import CreateEventButton from '../create-event-button';
import SmallCalendar from '../small-calendar';

export default function Sidebar(){
  return (
    <aside className='border p-5 w-64'>
      <CreateEventButton/>
      <SmallCalendar/>
    </aside>
  )
}