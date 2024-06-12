import React, { useState } from 'react'

export default function AddNewTranscation() {

    const [text, setText] = useState('')
    const [amount, setTmount] = useState(0)
    return (
        <div className='addtransaction'>
            <h4>add new transaction</h4>
            <hr />
            <label>
                <p>text</p>
                <input type='text' placeholder='enter text here' value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <label>
                <p>Amount</p>
                <input type='text' placeholder='enter amount here' value={amount} onChange={(e) => setTmount(e.target.value)} />
            </label>
            <button>Add transaction</button>


        </div>
    )
}
