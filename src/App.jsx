import React from "react"
import Navbar from "./components/Navbar"
import { Route, Router, Routes } from "react-router-dom"
import UserList from "./components/UserList"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"
import UserDetail from "./components/UserDetail"
import Home from "./components/Home"

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/add" element={<AddUser />}/>
          <Route path="/edit/:id" element={<EditUser />}/>
          <Route path="/read/:id" element={<UserDetail />} />
        </Routes>
    </>
  )
}

export default App
