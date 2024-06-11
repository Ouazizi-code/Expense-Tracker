import './App.css';
import Header from './compenent/header';
import Balance from './compenent/balance';
import IncomeExpenses from './compenent/incomeExpenses';
import TransactionList from './compenent/TransactionList';
import AddNewTranscation from './compenent/AddNewTranscation';


function App() {
  return (
    <div className='app'>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddNewTranscation />

    </div>
  );
}

export default App;
