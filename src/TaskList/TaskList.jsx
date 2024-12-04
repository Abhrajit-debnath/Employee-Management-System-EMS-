import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      {props.data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={task}/>;
        }
        if (task.newTask) {
          return <NewTask key={idx} data={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} data={task}/>;
        }
      })}
    </div>
  );
};

export default TaskList;
