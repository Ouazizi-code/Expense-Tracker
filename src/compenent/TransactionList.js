import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext)


    return (
        <div className='transactionlist'>
            <h4>History</h4>
            <hr />
            <ul id='list' className='list'>
                {transactions.map(transactions => (<Transaction transactions={transactions} key={transactions.id} />))}
            </ul>
        </div>
    )
}
