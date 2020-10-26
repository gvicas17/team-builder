import React from 'react'


export default function NewMembers(props){

    const {onSubmit, onChange, form} = props

    return(
        <div>
            <form onSubmit = {onSubmit}>
                <label>Name:
                    <input
                        type = 'text'
                        name = 'name'
                        value = {form.name}
                        onChange = {onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type = 'text'
                        name = 'email'
                        value = {form.email}
                        onChange = {onChange}
                    />
                </label>
                <label>Role:
                    <input
                        type = 'text'
                        name = 'role'
                        value = {form.role}
                        onChange = {onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}