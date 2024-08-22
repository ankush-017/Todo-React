import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {

    const [showMessage, setShowMessage] = useState(false);
    const [formData,setformData] = useState({
        name: '',
        email: '',
        Mobile: '',
        Message: ''
    })

    const handleChange = (e) => {
        setformData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const sendEmail = (e) => {
        e.preventDefault();
        setShowMessage(true);
        emailjs.sendForm(
          'service_sdr95mc',   // Replace with your EmailJS Service ID
          'template_o7qs7ga',  // Replace with your EmailJS Template ID
          e.target,            // The form element
          'xkxh4VlC7lVEBf4d4'      // Replace with your EmailJS User ID
        ).then((result) => {
          console.log('Email sent successfully:', result.text);
        }, (error) => {
          console.log('Failed to send email:', error.text);
        });
    
        // Reset form
        setformData({
          name: '',
          email: '',
          Mobile: '',
          Message: ''
        });
      };

    return (
        <>
        <div className='flex flex-col text-center max-w-[800px] mx-auto mt-5 text-white'>
            <p className='bg-[#e80948] rounded-lg py-1 px-2 text-[18px] mb-10'>
                <strong className='text-black'>Contact Us: </strong> We value your feedback and are here to help! Whether you have questions about Taskify, need assistance, or want to share your ideas, feel free to reach out to us. 
            </p>
        </div>
        <div className="relative flex items-top justify-center h-screen bg-black sm:mt-[10px] sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-52">
                                    Noida, Sec-63, Uttarpradesh, 201307
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 8076131983
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    taskify023@gmail.com
                                </div>
                            </div>
                        </div>

                        <form onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label htmlFor='name' className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="Mobile"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    required
                                    onChange={handleChange}
                                    value={formData.Mobile}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Number
                                </label>
                                <textarea
                                    type="text"
                                    name="Message"
                                    id="message"
                                    placeholder="Write your message (Comments) .........."
                                    required
                                    onChange={handleChange}
                                    value={formData.Message}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                            {/* <div className='text-white mt-7 ml-5'>
                                <p>Thanks for Contact us ....</p>
                                <h1>We will contact soon ....</h1>
                            </div> */}
                        </form>
                    </div>
                    {showMessage && (
                        <div className='py-2 text-[18px] text-[#4dc104] font-semibold flex flex-col rounded-2xl items-center justify-center mt-7 ml-5'>
                            <p>Thanks for contacting us ....</p>
                            <h1>We will contact you soon ....</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
    );
}