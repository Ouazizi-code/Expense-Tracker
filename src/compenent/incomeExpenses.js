import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transactions => transactions.amount)

    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div>
            <div className='inc-exp-conateiner'>
                <div>
                    <h4>INCOME</h4>
                    <p id='mony-plus' className='mony plus'>+${income}</p>
                </div>

                <div>
                    <h4>EXPENSE</h4>
                    <p id='mony-minus' className='mony minus '>-$ {Math.abs(expense)}</p>
                </div>
            </div>
        </div>
    )
}
