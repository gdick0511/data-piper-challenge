import {useState} from 'react'

function Form({users, setUsers}) {

    // State for setting values for from data to be captured
    const [addInfo, setAddInfo] = useState({
        client: '',
        poc: '',
        email: '',
        role: '',
        urgency: '',
        quantity: '',
        skills_needed: ''
    })

    // State for resetting form data once the handleSubmit function fires
    const [add, setAdd] = useState([])

    // Function to handle changes on input fields while adding new info
    function handleChange(e) {
        setAddInfo((currentInfo) => ({
            ...currentInfo,
            [e.target.name] : e.target.value
        }))
    }

    // Function to handle submit on the form to capture new info and push it to the db
    function handleSubmit(e) {
        e.preventDefault()
        const rowInfo = {
            client: addInfo.client,
            poc: addInfo.poc,
            email: addInfo.email,
            role: addInfo.role,
            urgency: addInfo.urgency,
            quantity: addInfo.quantity,
            skills_needed: addInfo.skills_needed,
        }
        fetch('/newuser',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(rowInfo),
        })
        .then((resp) => resp.json())
        .then((newData) => {
            setUsers((currentInfo) => [newData, ...currentInfo])
            setAddInfo({
                client: '',
                poc: '',
                email: '',
                role: '',
                urgency: '',
                quantity: '',
                skills_needed: ''
            })
            setAdd((newData))
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id='client'
                type='text'
                name='client'
                value={addInfo.client}
                required='required' 
                placeholder=' Client'
                onChange={handleChange}
                ></input>
                <input id='poc'
                type='text'
                name='poc'
                value={addInfo.poc}
                required='required'  
                placeholder=' POC'
                onChange={handleChange}
                ></input>
                <input id='email'
                type='text'
                name='email'
                value={addInfo.email}
                required='required'   
                placeholder=' Email'
                onChange={handleChange}
                ></input>
                <input id='role'
                type='text'
                name='role'
                value={addInfo.role}
                required='required'
                placeholder=' Role'
                onChange={handleChange}
                ></input>
                <input id='urgency'
                type='text'
                name='urgency'
                value={addInfo.urgency}
                required='required' 
                placeholder=' Urgency'
                onChange={handleChange}
                ></input>
                <input id='quantity'
                type='text'
                name='quantity'
                value={addInfo.quantity}
                required='required' 
                placeholder=' Quantity'
                onChange={handleChange}
                ></input>
                <input id='skills_needed' 
                type='text'
                name='skills_needed'
                value={addInfo.skills_needed}
                required='required' 
                placeholder=' Skills Needed'
                onChange={handleChange}
                ></input>
                <br></br>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form
