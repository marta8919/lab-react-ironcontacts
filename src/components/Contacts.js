import React, { Component } from 'react'
import ContactsJson from '../contacts.json'
import ContactDetails from './ContactDetails.js'

export default class Contacts extends Component {

    state = {
        contacts : ContactsJson.slice(0,5)
    }

    handleRandom=()=>{
        let randomIndex = Math.floor(Math.random()*ContactsJson.length)
        let randomContact = ContactsJson[randomIndex]

        this.setState({
            contacts : [...this.state.contacts, randomContact]
        })
    }

    handleSort=()=>{
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((a,b)=>{
            if(a.name > b.name){
                return 1
            }
            else if (a.name < b.name){
                return -1
            }
            else{
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    handlePopularity=()=>{
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((a,b)=>{
            if(a.popularity > b.popularity){
                return -1
            }
            else if (a.popularity < b.popularity){
                return 1
            }
            else{
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    handleDelete=(contactId)=>{
        let filteredContacts = this.state.contacts.filter((singleContact)=>{
            return singleContact.id!==contactId
        })

        this.setState({
            contacts: filteredContacts
        })
    }

    render() {
        return (
            <>
            
            <h1 className="header">IronContacts</h1>
            <div className="btn-group">
                <button onClick={this.handleRandom}>Add Random Contact</button>
                <button onClick={this.handleSort}>Sort by name</button>
                <button onClick={this.handlePopularity}>Sort by popularity</button>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </tbody>
                
                
                {
                    this.state.contacts.map((singleContact, index)=>{
                        return <ContactDetails 
                        name = {singleContact.name}
                        key= {index}
                        onDelete = {this.handleDelete}
                        image= {singleContact.pictureUrl}
                        popularity= {singleContact.popularity}
                        id = {singleContact.id}
                        />
                    })
                }
                

            </table>

            </>
        )
    }
}
