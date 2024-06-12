import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transactions => transactions.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div className='balance'>
            <h2>Balance :</h2>
            <h2 id='balance'>${total}</h2>
        </div>
    )
}
