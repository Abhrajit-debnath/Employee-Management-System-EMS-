import {React,useState,useEffect} from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {


  const [employees, setEmployees] = useState([]);

  // Fetch tasks from localStorage on mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  // Refresh tasks after a new task is added
  const refreshTasks = () => {
    const updatedData = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(updatedData);
  };
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask employees={employees}/>
    </div>
  );
};

export default AdminDashboard;
