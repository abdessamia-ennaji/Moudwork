import React from 'react'
import Sidebar from './Sidebar'

import './css/admin.css';

const AdminDashboard = () => {
  return (
      <>
        <div>
          <Sidebar />
          <div className="content-admin">
            <h1>Welcome to the Admin Dashboard</h1>
            <p>Your content goes here.</p>
          </div>
        </div>
      </>
         
  )
}

export default AdminDashboard