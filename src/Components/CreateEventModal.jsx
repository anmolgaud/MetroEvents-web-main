import React from 'react'
import CreateEventLeft from './atom/CreateEventLeft'
import CreateEventRight from './atom/CreateEventRight'

const CreateEventModal = () => {
  return (
    <div className="relative min-w-[50rem]">
      <div className="grid grid-cols-2 gap-8">
        <CreateEventLeft />
        <CreateEventRight />
      </div>
    </div>
  )
}

export default CreateEventModal