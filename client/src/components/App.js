import { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Search from './Search';
import Form from './Form';
import TableData from './TableData';
import datapiperlogo from './datapiperlogo.png'

function App() {

  // State for fetch once the promise and data are returned
  const [users, setUsers] = useState([])

  // State for search
  const [search, setSearch] = useState('')

  // Fetch Rquest to DB
  useEffect(() => {
    fetch('/users')
    .then((resp) => resp.json())
    .then((allUsers) => setUsers(allUsers))
    .catch((err) => console.log(err))
  },[])

  // Setting a variable to allow search functionality by client or role
  const filterTableData = users.filter(userInfo => {
    return(
      userInfo.client.toLowerCase().includes(search.toLowerCase())
      ||
      userInfo.role.toLowerCase().includes(search.toLocaleLowerCase())
    )
  })

  // Need to remove this later 
  // console.log(users)

  //Creating a variable here that will allow me to map threw the users and render a "card" for each one. This will act as the table for displaying the needed information 
  // const mappingOfTheUsers = users.map((eachUser) => <UserCard key={eachUser.id} client={eachUser.client} poc={eachUser.poc} email={eachUser.email} role={eachUser.role} urgency={eachUser.urgency} quantity={eachUser.quantity} skills_needed={eachUser.skills_needed} users={users} setUsers={setUsers}/>)

  return (
    <div className="App">
      <img id='logo' src={datapiperlogo} alt='Data Piper Logo'/>
      <h1>Data Piper Coding Challenge</h1>
      {/* {mappingOfTheUsers} */}
      <Search search={search} setSearch={setSearch}/>
      <Form users={users} setUsers={setUsers}/>
      <TableData setUsers={setUsers} users={filterTableData}/>
    </div>
  );
}

export default App;
