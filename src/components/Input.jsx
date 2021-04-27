import { useState } from 'react';

const Input = (props) => {
    const [userId, setText] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        if (!userId) {
            alert('Please add a user id!');
            return;
        }

        props.onSubmit({ userId });

        setText('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Enter id...'
                    value={userId}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <input type='submit' value='Get Posts' className='btn btn-block' />
        </form>
    )
}

export default Input