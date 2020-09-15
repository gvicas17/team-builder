import React, {useState} from 'react'


const members = [
    {name: 'Gabby', email: 'gabby@gabby.com' , role: 'Web Development'},
    {name: 'Michael', email: 'michael@michael.com', role: 'Accounting'},
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
        setValues(initialValues)
    }

    return(
        <div className = 'formContainer'>
            <h1>Add New Member</h1>
            {
                memberInfo.map((member, idx) =>{
                    return <div key={idx}>{member.name} - Email: {member.email} Role: {member.role} </div>
                })
            }
            <form onSubmit={submit}>
                <input name='name' type='text' values={values.name} onChange={change}/>
                <input name='email' type='email' values={values.email} onChange={change}/>
                <input name = 'role' type='text' values={values.role} onChange={change}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewMemberForm

