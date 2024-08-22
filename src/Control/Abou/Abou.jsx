import React from 'react'
import ankush from '../../assets/ankush.png'

function About() {
  return (
    <div className="bg-black h-screen text-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className='flex flex-col text-center max-w-[800px] mx-auto text-white'>
            <h1 className='font-bold text-[30px] mb-2'>Taskify</h1>
            <hr className='mb-4 border-t-[5px] border-yellow-700'/>
            <p className='mb-4'>
            Taskify is a powerful, intuitive task management application designed to help individuals and teams 
            organize their work efficiently. Whether you're managing personal to-do lists, collaborative projects,
            or complex workflows, Taskify provides the tools you need to stay on track and meet your goals.
            </p>
            <p className='bg-[#826f00] rounded-lg py-1 px-2 mb-4'>
                <strong className='text-black'>Cross-Platform Access:</strong> Access Taskify from any device – whether you're on desktop, tablet, or mobile – to stay productive wherever you are.
            </p>
            <p className='bg-[#e80948] rounded-lg py-1 px-2 mb-10'>
                <strong className='text-black'>Simple Task Creation:</strong> Quickly add tasks with due dates, priorities, and detailed descriptions to keep everything organized.
            </p>
        </div>
        {/* <hr className='mb-4 border-t-[5px] border-yellow-700'/> */}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center ">
            <div className="box-border">
                <img
                    src={ankush}
                    alt="image"
                    className='rounded-lg'
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-white font-bold md:text-4xl">
                About the Creator
                </h2>
                <p className="mt-6 text-white">
                <strong>Ankush kumar </strong>is the mind behind Taskify. Currently pursuing a B.Tech in Computer Science and 
                Engineering at Madan Mohan Malaviya University of Technology, Ankush is passionate about building
                innovative solutions that simplify everyday tasks. created Taskify to help individuals and teams stay organized 
                and productive.
                </p>
                <p className="mt-4 text-white">
                Driven by the belief that technology should make life easier, Ankush aims to continue developing tools 
                that empower people to achieve more with less effort. Taskify is a reflection of his dedication to making 
                productivity accessible to everyone.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About