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
                       {/* I am able to change the color of Urgency using a ternary expression to then change which classname is associated with that users urgency level. Using CSS, we are then able to change the background color of the box to White, Orange or Red */}
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
