import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from './services/api';

function UserForm ({currentUser, onSave}) {
    const [user, setUser] = useState({ name: '', email: '', organization: ''});

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SUBMIT HANDLE');
        if (user._id) {
            await updateUser(user._id, user);
        } else {
            await createUser(user);
        }
        onSave();
        setUser({name: '', email: '', organization: ''});
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' name='name' value={user.name} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email' value={user.email} onChange={handleChange} />
            </div>
            <div>
                <label>Organization:</label>
                <input type='organization' name='organization' value={user.organization} onChange={handleChange} />
            </div>
            <button type='submit'>Save</button>
        </form>
    );
};

export default UserForm
