export default function Page() {
    return (
    <>
    <header className="h-fit min-h-full bg-about-bg bg-cover">
    <div className="w-full h-full flex flex-col pl-24 pt-64 pb-16 bg-black/60">
        <h1>Let's Get in Touch.</h1>
    </div>
    </header>

    <section className="mx-24 pt-36 flex flex-col">
    <h2 className="mx-auto w-2/3">Have a question, comment, or suggestion?</h2>
    <p className="mx-auto w-2/3">Send it our way.</p>

    <form className="mx-auto w-2/3 mt-8 pb-36">
        <div className="flex w-full space-x-4">
            <input type="text" id="first" name="first" placeholder="First Name" className="w-full px-5 py-3"/>
            <input type="text" id="last" name="last" placeholder="Last Name" className="w-full px-5 py-3"/>
        </div>
        <input type="email" id="email" name="email" placeholder="Email" className="w-full px-5 py-3 mt-6"/>
        <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full px-5 py-3 mt-6"/>
        <textarea id="message" name="message" placeholder="Message" className="w-full px-5 py-3 mt-6 h-64"/>

        <button className="mt-6">SEND MESSAGE</button>
    </form>

    </section>

    </>
    )
}