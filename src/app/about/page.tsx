export default function Page() {
    return (
    <>
    <header className="h-fit min-h-full bg-about-bg bg-cover">
    <div className="w-full h-full flex flex-col pl-24 pt-64 pb-16 bg-black/60">
        <h1>What is CUP?</h1>
    </div>
    </header>


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

    </>
    )
}