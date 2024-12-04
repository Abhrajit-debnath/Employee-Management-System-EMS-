import { React, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [UserData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [task, settask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    settask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = UserData;
    console.log(data);

    UserData.employees.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(task);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);

    // setUserData(data)

    setCategory("");
    setTaskDate("");
    setassignTo("");
    settaskDescription("");
    settaskTitle("");
  };
  return (
    <div className="">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="flex items-start justify-between w-full bg-[#1c1c1c] p-10 mt-20 rounded-lg"
      >
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="font-semibold font-primary text-lg mb-3">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Write task title"
              className="w-96 outline-none bg-transparent border-2 border-gray-700 px-4 py-2 rounded-md text-white"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold font-primary text-lg mb-3">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              name=""
              id=""
              className="w-96 outline-none bg-transparent border-2 border-gray-700 px-4 py-2 rounded-md text-white"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold font-primary text-lg mb-3">
              Assign To
            </h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
              type="text"
              placeholder="Employee name"
              className="w-96 outline-none bg-transparent border-2 border-gray-700 px-4 py-2 rounded-md text-white"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold font-primary text-lg mb-3">
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="Design , dev etc"
              className="w-96 outline-none bg-transparent border-2 border-gray-700 px-4 py-2 rounded-md text-white"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="font-primary font-semibold text-lg mb-3">
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            name=""
            id=""
            className="h-[250px] w-full outline-none bg-transparent border-2 border-gray-700 px-4 py-2 rounded-md text-white"
          ></textarea>
          <button className="bg-emerald-600 mt-10 py-3 rounded-md font-semibold text-lg font-primary">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
