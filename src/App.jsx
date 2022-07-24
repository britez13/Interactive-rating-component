
import { useState } from 'react';
import SelectRating from './components/SelectRating';
import ResultRating from './components/ResultRating';
import './App.scss';

function App() {
  const [rating, setRating] = useState();
  const [isShowResult, setIsShowResult] = useState(false);
  return( 
  <main className='container'>
    {!isShowResult && <SelectRating setRating={setRating} setIsShowResult={setIsShowResult} />}
    {isShowResult && <ResultRating rating={rating} />}
  </main>
)}

export default App;






