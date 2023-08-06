export default function Page() {
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
      <div className="w-full flex pt-24 pb-24">
        {/* Insert Dynamic Pull from Google Sheet for Event Data*/}
      </div>
      <h2 className="m-auto">Past Events</h2>
      <button className="m-auto">VIEW MORE</button>
    </section>

    </>
  )
}