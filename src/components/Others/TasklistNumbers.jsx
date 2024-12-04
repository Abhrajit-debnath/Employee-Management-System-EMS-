import React from "react";

const TasklistNumbers = (props) => {
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="w-[45%] bg-blue-500 px-10 py-8 rounded-xl">
        <h2 className="text-2xl font-semibold">{props.data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] bg-yellow-500 px-10 py-8 rounded-xl">
        <h2 className="text-2xl font-semibold">{props.data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] bg-emerald-500 px-10 py-8 rounded-xl">
        <h2 className="text-2xl font-semibold">{props.data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>


      <div className="w-[45%] bg-red-500 px-10 py-8 rounded-xl">
        <h2 className="text-2xl font-semibold">{props.data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TasklistNumbers;
