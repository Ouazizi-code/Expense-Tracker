import React from 'react'

export default function IncomeExpenses() {
    return (
        <div>
            <div className='inc-exp-conateiner'>
                <div>
                    <h4>INCOME</h4>
                    <p id='mony-plus' className='mony plus'>+$ 0.00</p>
                </div>

                <div>
                    <h4>EXPENSE</h4>
                    <p id='mony-minus' className='mony minus'>-$ 0.00</p>
                </div>
            </div>
        </div>
    )
}
