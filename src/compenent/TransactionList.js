import React from 'react'

export default function TransactionList() {
    return (
        <div className='transactionlist'>
            <h4>History</h4>
            <hr />
            <ul id='list' className='list'>
                <li className='minus'>
                    cash<span>-$400</span>
                </li>
                <li className='minus'>
                    cash<span>-$400</span>
                </li>
                <li className='minus'>
                    cash<span>-$400</span>
                </li>
            </ul>
        </div>
    )
}
