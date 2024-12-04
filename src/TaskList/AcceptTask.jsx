import React from "react";

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-green-500 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm font-primary">
          High
        </h3>
        <h4 className="text-base">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold font-primary">
        {data.taskTitle}
      </h2>
      <p className="text-base mt2">
      {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">
          Mark as completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
