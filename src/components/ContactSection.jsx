import React, { useState } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import LoadingBar from 'react-top-loading-bar';
import Link from 'next/link';

export default function ContactSection() {
  const [client, setClient] = useState({
    clientName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [progress, setProgress] = useState(0)

  const handleSendMessage = async (e) => {
    try {
      setProgress(30)
      const response = await axios.post('/api/contact/contactme', client)
      if (!response.data.success) {
        setProgress(100)
        toast.error(response.data.error)
      }
      setClient({
        clientName: "",
        email: "",
        subject: "",
        message: ""
      })
      setProgress(100)
      toast.success("Thank you for getting in touch.")
      // toast.custom((t) => (
      //   <div
      //     className={`${t.visible ? 'animate-enter' : 'animate-leave'
      //       } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      //   >
      //     <div className="flex-1 w-0 p-4">
      //       <div className="flex items-start">
      //         <div className="flex-shrink-0 pt-0.5">

      //         </div>
      //         <div className="ml-3 flex-1">
      //           <p className=" font-medium text-green-400 font-roboto text-xl text-center">
      //             Thank you for getting in touch
      //           </p>
      //           <p className="mt-1 text-sm text-gray-500 text-center ">
      //             I will contact you through email within the next two hours
      //           </p>
      //         </div>
      //       </div>
      //     </div>

      //   </div>
      // ))

    } catch (error) {
      setProgress(100)
      toast.error(error.response.data.error)
      console.log(error.response.data.error)
    }

  }

  return (
    <>
      {progress !== 0 && <div className='fixed w-full h-full top-0 right-0 left-0 bottom-0 z-50 bg-opacity-25 bg-gray-500'></div>}


      <section id="contacts" className="contacts flex h-screen flex-col justify-center items-center space-y-20 snap-center snap-always">
        <LoadingBar
          color='#f11946'q
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <h1 className="text-[2.5rem] md:text-5xl font-roboto font-medium"><span className="text-secondery-text-color">Contacts</span> <span className="text-main-text-color">/ Address</span></h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center space-y-2 ">
            <div className='text-2xl [&>*]:cursor-pointer text-main-text-color '>
              <Link href={'mailto:arjitcodes@outlook.com'}> <GrMail className='hover:text-secondery-text-color inline-block' /><p className='ml-2 hover:text-indigo-500 hover:underline text-sm inline-block font-roboto'>arjitcodes@outlook.com</p></Link>
            </div>
            <div className='text-2xl [&>*]:cursor-pointer text-main-text-color space-x-2'>
              <Link href={'https://www.instagram.com/arjitwebdev'}><AiFillInstagram className='hover:text-secondery-text-color inline-block' /></Link>
              <Link href={'https://twitter.com/Arjitwebdev'}> <AiFillTwitterCircle className='hover:text-secondery-text-color inline-block' /></Link>
              <Link href={'https://github.com/arjitcodes'}> <AiFillGithub className='hover:text-secondery-text-color inline-block' /></Link>
            </div>
           
          </div>
          <div className="flex flex-col space-y-5  [&>*]:px-4 [&>*]:py-[0.375rem] text-xs text-input-text-color  font-poppins bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-input-border-color-1 py-6 px-4 [&>*]:placeholder-placeholder-color">
            <input type="text" name="fullName" id="fullName" placeholder="Full Name" className="border border-input-border-color-1 bg-transparent w-[300px]" value={client.clientName} onChange={(e) => { setClient({ ...client, clientName: e.target.value }) }} inputMode='none'/>
            <input type="email" name="email" id="email" placeholder="Your Email" className="border border-input-border-color-1 bg-transparent" value={client.email} onChange={(e) => { setClient({ ...client, email: e.target.value }) }} inputMode='email'/>
            <textarea name="message" id="message" placeholder="Type your message here" className="border border-input-border-color-1 bg-transparent h-24" value={client.message} onChange={(e) => { setClient({ ...client, message: e.target.value }) }}></textarea>
            <button type="submit" className="bg-secondery-text-color text-white" onClick={handleSendMessage}>Send message</button>

          </div>
        </div>
      </section>
    </>
  )
}


// [&>*]:placeholder-input-border-color-1