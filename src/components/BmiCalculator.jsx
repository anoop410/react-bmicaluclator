import React from 'react'

function BmiCalculator({
    height,
    weight,
    onWeightChange,
    onHeightChange
}) {
  return (
    <div className='w-full flex flex-wrap'>
        <div className='w-full my-2 mx-2 flex'>
            <label htmlFor="height" className='w-1/3 font-semibold text-slate-800'>Height(Cm)</label>
            <input type="number"  id="height" className=' w-1/3 remove-arrow outline outline-1 focus:ring focus:border-blue-500 rounded p-1 ' value={height} onChange={(e) => {onHeightChange && onHeightChange(e.target.value)}} />
        </div>
        <div className='w-full mb-3 mx-2 flex'>
            <label htmlFor="weight" className="w-1/3 font-semibold  text-slate-800" >weight(Kg)</label>
            <input type="number" name="" id="weight" className='w-1/3 remove-arrow outline outline-1 focus:ring focus:border-blue-500 rounded p-1' value={weight} onChange={(e) => {onWeightChange && onWeightChange(e.target.value)}}/>
        </div>
    </div>
  )
}

export default BmiCalculator