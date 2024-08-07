import React from 'react'

const ProjectItem = ({title, detailes}) => {
  return (
    <div >
        <h2 className='font-bold text-[#001b5e] text-center'>
            {title}
        </h2>
        <div>
            <h3 className='pt-4 pb-4'>
                {detailes}
            </h3>
        </div>
    </div>
  )
}

export default ProjectItem;