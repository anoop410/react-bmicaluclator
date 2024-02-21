import { useState } from 'react';
import './App.css';
import BmiCalculator from './components/BmiCalculator';

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [className, setClassName] = useState("text-slate-500")

  const cal_bmi = () => {
    const calculatedBmi = (weight * 100 * 100) / (height * height);
    const roundedBmi = calculatedBmi.toFixed(2);
    if(roundedBmi<18.5){
      setClassName("text-yellow-500")
    }
    if(roundedBmi < 25 && roundedBmi > 18.5)
    {
      setClassName("text-green-500")
    }
    if(roundedBmi < 30 && roundedBmi > 25) {
      setClassName("text-red-300")
    }
    if(roundedBmi > 30){
      setClassName("text-red-500")
    }
    setBmi(roundedBmi);
  };

  return (
    <>
    <div className="flex flex-col items-center h-screen ">
      <div className='border border-2 w-1/3 h-72 bg-green-100'>
      <h1 className='text-green-600 font-bold text-3xl text-center bg-white-600'>BMI Calculator</h1>
      <form onSubmit={(e)=> {
            e.preventDefault()
            cal_bmi()
        }}>
        <BmiCalculator  height={height}
        weight={weight}
        onHeightChange={(height) => setHeight(height)}
        onWeightChange={(weight) => setWeight(weight)} />
        <div className='flex flex-wrap justify-center items-center'>
          <label htmlFor="bmi" className='w-1/3 text-xl text-slate-800 mb-2 font-bold ps-2'>BMI</label>
          <input type="number" id="bmi" className={`w-1/3 remove-arrow outline-none rounded text-md mb-5 ${className} bg-transparent text-2xl font-serif font-bold mt-4`} value={bmi} disabled />
              <ul className='w-1/3'>
                <li className='text-yellow-500'>&lt;18.5 Under</li>
                <li className='text-green-500'>18.5-25 Normal</li>
                <li className="text-red-300">25-30 Over</li>
                <li className="text-red-500">&gt;30 Obesity</li>
              </ul>
        </div>
        <div className="w-full justify-items-center grid">
        <button className='mx-auto bg-blue-600 text-white rounded-lg p-3' type='submit'> 
        Calculate BMI
        </button>
        </div>

        </form>
      </div>
    </div>
    </>
  );
}

export default App;

