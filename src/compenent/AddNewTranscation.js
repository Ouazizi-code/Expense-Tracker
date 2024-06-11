import React from 'react'

export default function AddNewTranscation() {
    return (
        <div className='addtransaction'>
            <h4>add new transaction</h4>
            <hr />
            <label>
                <p>text</p>
                <input type='text' placeholder='enter text here' />
            </label>
            <label>
                <p>Amount</p>
                <input type='text' placeholder='enter amount here' />
            </label>
            <button>Add transaction</button>


        </div>
    )
}
