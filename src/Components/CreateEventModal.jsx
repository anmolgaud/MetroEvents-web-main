import React from "react";
import CreateEventLeft from "./atom/CreateEventLeft";
import CreateEventRight from "./atom/CreateEventRight";

const CreateEventModal = () => {
  return (
    <div className="relative min-w-[50rem]">
      <div className="grid grid-cols-2 gap-y-4 rounded-lg bg-white shadow-md shadow-neutral-200">
        <CreateEventLeft />
        <CreateEventRight />
      </div>
    </div>
  );
};

export default CreateEventModal;
