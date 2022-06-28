import { useState } from 'react';
import React from 'react'

function UserCard({client, poc, email, role, urgency, quantity, skills_needed}) {

    // State
 
    return (
        <div>
           <table className='table'>
               <thead>
                   <tr className='th'>
                       <th>Client</th>
                       <th>POC</th>
                       <th>Email</th>
                       <th>Role</th>
                       <th>Urgency</th>
                       <th>Quantity</th>
                       <th>SKills Needed</th>
                   </tr>
               </thead>
               <tbody>
                   <tr className='td'>
                       <td>{client}</td>
                       <td>{poc}</td>
                       <td>{email}</td>
                       <td>{role}</td>
                       <td>{urgency}</td>
                       <td>{quantity}</td>
                       <td>{skills_needed}</td>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}

export default UserCard
