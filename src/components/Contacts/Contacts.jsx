import React from "react";
import css from "./Contacts.module.css"

export default class Contacts extends React.Component {

   
    render() {
        return (
            <div>
            
                        <ul className={css.listContacts}>
                            {this.props.contacts.map(contact => (
                                <li className={css.elemContacts} key={contact.id}>{contact.name}: {contact.number} <button className={css.btnContacts} type="button"onClick={()=>{this.props.hendleDeletedContact(contact.id)}}  >Deleted</button></li>
                            ))}
                        </ul>
                    
                
            </div>
        );
    }
}