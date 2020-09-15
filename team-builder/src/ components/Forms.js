import React, {useState} from 'react'
import { render } from 'react-dom'
import App from '.components/App'

const members = [
    {name: 'Gabby', email: 'gabby@gabby.com' , role: 'Web Development'},
    {hame: 'Michael', email: 'michael@michael.com', role: 'Accounting'},
    {name: 'Randi', email: 'randi@randi.com', role: 'Marketing'},
]

const initialValues ={
    name: '',
    email: '',
    role: '',
}

function NewMemberForm() {
    const [memberInfo, setMemberInfo] = useState(members)
    const [values, setValues] = useState(initialValues)

    const change = evt => {
    const {name, value} = evt.target
    setValues({...values, [name]: value})
    }
    const submit = evt => {
        evt.preventDefault()
        const newMember = {
            name: values.name.trim(),
            email: values.email.trim(),
            role: values.role.trim(),
        }
        setMemberInfo([...memberInfo, newMember])
        setValues([initialValues])
    }

    return(
        <div className = 'formContainer'>
            <h1>Add New Member</h1>
            {
                memberInfo.map((member) =>{
                    return <div key={member.id}>{member.name}'s email is {member.email} and works in the {member.role} department</div>
                })
            }
            <form onSubmit={submit}>
                <input name='name' type='text' values={values.name} onChange={change}/>
                <input email='email' type='email' values={values.email} onChange={change}/>
                <input role = 'role' type='text' values={values.role} onChange={change}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Forms

