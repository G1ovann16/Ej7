import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {ContactClass} from '../models/contact.class'

const ContactComponent = ({contact, on, remove}) => {

  useEffect(() => {
    console.log('Create Contact')
    return () => {
      console.log('unmount')
    };
  }, [contact]);

  function contactOnIcon(){
    if(contact.onLine){
      return (<i onClick={() => on(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
    }else{
      return (<i onClick={() => on(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
    }
}

  const contactOff = {
    color: 'gray',
    fontWeight: 'bold',
  }
const contactOn = {
    fontWeight: 'bold',
    color: 'tomato'
}
const show = {
 opacity: 1
}
const hide = {
  opacity: 0
}

  return (
    <div className='container'>
    <tr className='fw-normal' style={contact.onLine ? contactOn : contactOff}>
            <th>
                <span className='ms-4'>{contact.name}</span>
            </th>
            <td className='align-middle phone' style={contact.onLine ? show : hide }>
                <span>{contact.phone}</span>
            </td>
            <td className='align-middle'>
            </td>
            <td className='align-middle'>
            {contactOnIcon()}
            </td>
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
        </tr>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(ContactClass).isRequired,
  on: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default ContactComponent