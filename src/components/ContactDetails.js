import React from 'react'

export default function ContactDetails(props) {
    return (
        <>
        <tbody>
            <tr>
            <td className="td-image"><img src={props.image} alt="Artist"></img></td>
            <td>{props.name} </td>
            <td>{props.popularity}</td>
            <td><button onClick={()=>{props.onDelete(props.id)}}>Delete</button></td>
            </tr>
        </tbody>
        </>
    )
}
