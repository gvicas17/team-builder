import React, {useState} from 'react'
import './App.css';
import NewMembers from './Components/NewMembers'
import MembersList from './Components/MembersList'




const initialForm = {
  name:'',
  email:'',
  role: ''

}
const initialMembers = [
  {
  name: '',
  email: '',
  role: ''
},
]
function App() {
  const [form, setForm] = useState(initialForm)
    const [members, setMembers] = useState(initialMembers)

    const onSubmit = (e) => {
        e.preventDefault()
        setMembers([
            ...members,
            
             {name: form.name,
             email: form.email,
             role: form.role}
            
        ])
        setForm(initialForm)
    }
    const onChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className="App">
      <NewMembers form = {form} onSubmit = {onSubmit} onChange = {onChange} />
      <MembersList members = {members}/>
    </div>
  );
}

export default App;
