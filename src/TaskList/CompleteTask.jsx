import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-yellow-500 rounded-xl p-5">
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
      <div className="mt-2">
        <button className="w-full">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
