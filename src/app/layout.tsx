import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"
import { FaTiktok } from "react-icons/fa6"

export const metadata: Metadata = {
  title: 'Northeastern - CUP',
  description: 'Northeastern Council for University Programs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header id="topnav" className="absolute p-12 w-full flex justify-between">
          <img className="" src="cup.svg"></img>
          <nav className="flex space-x-10 ">
            <Link className='h-fit hover:underline underline-offset-4' href="/">HOME</Link>
            <Link className='h-fit hover:underline underline-offset-4' href="/events">EVENTS</Link>
            <Link className='h-fit hover:underline underline-offset-4' href="/about">ABOUT</Link>
            <Link className='h-fit hover:underline underline-offset-4' href="/contact-us">CONTACT US</Link>
          </nav>
        </header>
        
        {children}

        <footer className='w-full h-fit flex pl-24 pr-24 pt-12 pb-24'>
          <div className='basis-2/5'>
            <h3>Meetings</h3>
            <p className='mt-12'>Wednesdays 7:30 PM - 8:30 PM</p>
            <p>in Curry Student Center #333</p>
            <p className='mt-12'><strong>Email: </strong><a className='email' href="mailto:cup@neu.edu">cup@neu.edu</a></p>
          </div>

          <div className='basis-3/5 flex flex-col'>
            <div className='flex'>
              <div className='basis-1/3'>
                <h3>Resources</h3>
                <p className='mt-12'><a>E-Board Office Hours</a></p>
                <p className='mt-2'><a>Event Suggestion Form</a></p>
                <p className='mt-2'><a>Subscribe to Our Newsletter</a></p>
              </div>

              <div className='basis-1/3'>
                <h3>About CUP</h3>
                <p className='mt-12'><a>Leadership</a></p>
                <p className='mt-2'><a>History</a></p>
                <p className='mt-2'><a>Our Commitment to Diversity</a></p>
              </div>

              <div className='basis-1/3'>
                <h3>Contact</h3>
                <p className='mt-12'><a>Collaborate with Us</a></p>
              </div>
            </div>
            <hr className='h-0.5 border-0 rounded bg-white mt-20 mb-6'></hr>
            <div className='flex'>
              <span>© The Council for University Programs, 2023</span>
              <p className='text-2xl flex space-x-4 ml-auto'>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
                <FaTwitter />
                <FaTiktok />
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}