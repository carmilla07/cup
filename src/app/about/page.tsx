import { getMembers } from "../sheet"
import Link from "next/link"

import { FaInstagram } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"


function teamSection(team: any, members: any) {

  const teamMembers = members.filter((member: { team: any }) => member.team == team)

  return (
    <div className="mt-16">
      <h3>{ team }</h3>
      <div className="w-full flex flex-wrap gap-x-4">
      {teamMembers.map((member : any) => (
            memberIcon(team, member)
        ))}
      </div>
    </div>
  )
}

function memberIcon(team: any, member: any) {

  return (
    <div className="w-[250px] mx-auto mt-8">
      <img src={ "./members/" + member.image }/>
      <h3 className="mt-2">{ member.name }</h3>
      <p className="mt-2">{ member.role }</p>
      <div className="flex text-xl highlight gap-x-1">
        { member.linkedIn ? <><Link target="_blank" href={ member.linkedIn }><FaLinkedin/></Link></> : ""}
        { member.instagram ? <><Link target="_blank" href={ member.instagram }><FaInstagram/></Link></> : ""}
      </div>
    </div>
  )
}

export default async function Page() {

    var members: any = await getMembers()
    // @ts-ignore
    const teams: any = [...new Set(members.map(member => member.team))]

    return (
    <>
    <header className="h-fit min-h-full bg-about-bg bg-cover">
    <div className="w-full h-full flex flex-col pl-24 pt-64 pb-16 bg-black/60">
        <h1>What is CUP?</h1>
    </div>
    </header>
    
    <section id="ourTeam" className="w-full h-full flex flex-col px-24 pt-24 pb-36">
      <h2>The Council for University Programs (CUP)</h2>
      <p className="mt-16 w-2/5">CUP is the official programming board providing campus-wide entertainment for the Northeastern University student body.</p>
      <p className="mt-8 mb-36 highlight">We are run by students, for students.</p>
      <h2 className="m-auto">Our Team</h2>

      {teams.map((team : any) => (
          teamSection(team, members)
        ))}

    </section>

    <section id="getinvolved" className="w-full h-full flex flex-col pl-24 pr-24 pt-12 pb-36">
      <h2 className="m-auto">Interested in Joining?</h2>
      <p className="m-auto">We have plenty of opportunities for you to get involved.</p>
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