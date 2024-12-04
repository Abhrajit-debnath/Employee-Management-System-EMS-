import React, { useContext, useEffect, useState } from "react";
import "../src/index.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [UserData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setloggedInUserData(parsedUser.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (UserData && UserData.employees) {
      const employee = UserData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
