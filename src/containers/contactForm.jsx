import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from '../models/contact.class';

const ContactForm = ({add, length}) => {

   
    const nameRef = useRef('');
    const phoneRef = useRef('');



    function addContact(e){
        e.preventDefault();
        const newContact = new ContactClass(
            nameRef.current.value,
            phoneRef.current.value,
            true,
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name'/>
                <input ref={phoneRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact number'/>
                
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Contact' : 'Create your Contact'}
                </button>
            </div>
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default ContactForm;
