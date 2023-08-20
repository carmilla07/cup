import Link from 'next/link'

import { getEvents } from './sheet'

import { Event } from './events/page'
import { Slider } from './slider' 

export default async function Page() {

  var var_event: any = await getEvents()
  var_event = var_event.filter((event: any) => new Date(event.datesort) >= new Date() )
  var_event = var_event.sort((a: any, b: any) => a.datesort.getTime() - b.datesort.getTime())
  var_event = var_event.slice(0,3)

  return (
    <>
    <header className="h-fit min-h-full bg-home-bg bg-cover">
      <div className="w-full h-full flex flex-col pl-24 pt-64 pb-36 bg-black/60">
        <h1>The Council for <br></br> University Programs</h1>
        <p className="mt-8 w-96">Northeastern University’s official, student-led programming board.</p>
        <button className="mt-12">GET INVOLVED</button>
      </div>
    </header>

    <section id="events" className="w-full h-full flex flex-col pl-24 pr-24 pt-12 pb-12">
      <h2 className="m-auto">Upcoming Events</h2>
      <div className="w-full flex pt-24 pb-24">
        
        {var_event.map((upcoming_event : any) => (
          Event(upcoming_event)
        ))}
      
      </div>
      <Link href="/events" className='m-auto'><button>VIEW PAST EVENTS</button></Link>
    </section>

    <section id="eventphotos" className="h-fit relative flex">
          <Slider />
    </section>

    <section id="getinvolved" className="w-full h-full flex flex-col pl-24 pr-24 pt-12 pb-36">
      <h2 className="m-auto">Get Involved!</h2>
      <div className="w-full flex pt-24 pb-16">
        <div className="w-1/3 text-center mx-auto">
          <img className="mx-auto mb-12" src="calendar.svg" />
          <h4 className="mb-6">Events & Booking</h4>
          <p className="w-2/3 mx-auto">Curate diverse events, handle venue selection, budgeting, logistics, and artist booking. Join us to make a lasting impact on our campus's event landscape.</p>
        </div>

        <div className="w-1/3 text-center mx-auto">
          <img className="mx-auto mb-12" src="megaphone.svg" />
          <h4 className="mb-6">Marketing & Design</h4>
          <p className="w-2/3 mx-auto">The driving force behind CUP’s captivating campaigns. Craft compelling messaging, design eye-catching graphics, and execute effective marketing strategies to engage our campus community.</p>
        </div>

        <div className="w-1/3 text-center mx-auto">
          <img className="mx-auto mb-12" src="gears.svg" />
          <h4 className="mb-6">Finance & Operations</h4>
          <p className="w-2/3 mx-auto">Handle budgeting, financial management, and operational logistics to create seamless experiences. Gain valuable skills in finance and operations while making a lasting impact on our event success.</p>
        </div>
      </div>
      <button className="m-auto">APPLY TO JOIN CUP</button>
    </section>

    <section id="newsletter" className="h-fit text-white bg-newsletter-bg">
      <div className="w-full h-full py-24 flex flex-col bg-black/60">
        <h1 className="pl-24">Subscribe to our <br/> newsletter!</h1>
        <p className="ml-24 w-1/3 mt-6">Stay up to date on all of our events— you’re not gonna want to miss out.</p>
        <div className="flex ml-24 mt-12 space-x-5">
          <input type="email" id="email" name="email" placeholder="Enter your email" className="text-black py-2 px-5 w-1/3 rounded"></input>
          <button className="h-max w-fit">SUBSCRIBE</button>
        </div>
      </div>
    </section>

    </>
  )
}


