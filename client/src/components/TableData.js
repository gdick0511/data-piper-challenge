import React from 'react'

function TableData({users}) {
    return (
        <div>
            <table>
               <thead>
                   <tr>
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
                   {users.map((eachUser) => (
                   <tr>
                       <td>{eachUser.client}</td>
                       <td>{eachUser.poc}</td>
                       <td>{eachUser.email}</td>
                       <td>{eachUser.role}</td>
                       <td className={eachUser.urgency == 'Med' ? 'orange-background' : '' || eachUser.urgency == 'High' ? 'red-background' : ''}>{eachUser.urgency}</td>
                       <td>{eachUser.quantity}</td>
                       <td>{eachUser.skills_needed}</td>
                   </tr>
                   ))}
               </tbody>
           </table>
        </div>
    )
}

export default TableData
