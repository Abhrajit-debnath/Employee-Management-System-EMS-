import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  // const authdata = useContext(AuthContext);
  const [UserData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="text-lg font-medium w-1/5 ">employee</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>
      <div className="">
        {UserData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-emerald-500 border-2 py-2 px-4 flex justify-between rounded mb-2"
            >
              <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h3 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskCounts.active}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-white">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
