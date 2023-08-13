import { FaRegClock } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"

import { getEvents } from "../sheet"

export function Event(event: any) {
  return (
    <div className='w-[350px] bg-white rounded mx-auto'>
      <img className='rounded-t' src={ "events/" + event.image }></img>
      <div className='p-6'>
        <h5 className='mb-4'>{ event.title }</h5>
        <div className="flex mb-2"><FaRegClock className="text-2xl highlight mr-3 my-auto" /><p className='event_desc'> { event.time + " " + event.date } </p></div>
        <div className="flex"><FaLocationDot className="text-2xl highlight mr-3 my-auto" /><p className='event_desc'> { event.location } </p></div>
      </div>
    </div>
  )
}

export default async function Page() {

  var all_events: any = await getEvents()
  all_events = all_events.sort((a: any, b: any) => new Date(a.datesort).getTime() - new Date(b.datesort).getTime())
  const upcoming_events = all_events.filter((event: any) => new Date(event.datesort) >= new Date() )
  const past_events = all_events.filter((event: any) => new Date(event.datesort) < new Date() ).sort((a: any, b: any) => new Date(b.datesort).getTime() - new Date(a.datesort).getTime())

  return (
    <>
    <header className="h-fit min-h-full bg-events-bg bg-cover">
      <div className="w-full h-full flex flex-col pl-24 pt-64 pb-36 bg-black/60">
        <h1>Never miss out on a<br />CUP Event ever again.</h1>
        <p className="mt-8 w-96">Check out our Event Calendar below.</p>
      </div>
    </header>

    <section id="events" className="w-full h-full flex flex-col pl-24 pr-24 pt-12 pb-36">
      <h2 className="m-auto">Upcoming Events</h2>
      <div className="w-full flex flex-wrap pt-24 pb-24 gap-y-12">
        
        {upcoming_events.map((event : any) => (
          Event(event)
        ))}

      </div>
      <h2 className="m-auto">Past Events</h2>
      <div className="w-full flex flex-wrap pt-24 pb-24 gap-y-12">
        
        {past_events.slice(0,6).map((event : any) => (
          Event(event)
        ))}

        {/* Create functionality for view more past events */}

      </div>
      <button className="m-auto">VIEW MORE</button>
    </section>

    </>
  )
}