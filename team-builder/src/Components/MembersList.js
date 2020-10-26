import React from 'react'

export default function MembersList (props){
    const members = props.members
    return(
        <div>
        {members.map((member, idx) =>{
            return(
            <div key={idx}>
                <h1>{member.name}</h1>
                <h4>{member.email}</h4>
                <h4>{member.role}</h4>
                </div>
            )
        }
        )}
        </div>
    )
}