import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players'
import Subscribe from './Components/Subscribe/Subscribe'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [balance, setBalance] = useState(0);
  // console.log(balance);
  // increase coin
  const handleCoin = () => {
    setBalance(balance + 85000)
    toast.success("OH! You have got Money");
  }

  // handle the choosen player
  const handleChoosePlayer = (data) => {

    const { price } = data;
    console.log(price);

    if (balance >= price) {
      handleSelected(data);
      setBalance(balance - price);
    } else {
      toast.error("OH! You have not enough Money");
    }
  }

  // handle select 
  const [selected, setSelected] = useState([])

  const handleSelected = select => {

    const singleSelected = selected.find((s) => select.id === s.id)
    const newSelected = [...selected, select];


    if (singleSelected) {
      toast.error("You have already added this player");
      return;
    }
    else if (newSelected.length <= 6) {
      setSelected(newSelected);
      toast.success("You have successfully Selected this Player");
    }
    else {
      toast.error("You have already Selected six players");
    }
  }

  // handle delet

  const handleDelet = delet => {
    const remainig = selected.filter(s => s.id !== delet.id);
    setSelected(remainig)
    setBalance(balance + delet.price)
    toast.error("You have deleted selected Player");
  }

  return (
    <>
      <Header handleCoin={handleCoin} balance={balance} setBalance={setBalance}></Header>
      <Players handleDelet={handleDelet} selected={selected} handleChoosePlayer={handleChoosePlayer} balance={balance}></Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose="2000"></ToastContainer>
    </>
  )
}

export default App
