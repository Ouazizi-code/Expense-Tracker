import './App.css';
import Header from './compenent/header';
import Balance from './compenent/balance';
import IncomeExpenses from './compenent/incomeExpenses';
import TransactionList from './compenent/TransactionList';
import AddNewTranscation from './compenent/AddNewTranscation';


import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider className='app'>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddNewTranscation />

    </GlobalProvider>
  );
}

export default App;
