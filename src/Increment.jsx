import React, { useState } from 'react'

const Increment = () => {

    const [count, setCount] = useState(7)
    
    function increment() {
      setCount(count +1)
    }
    function decrement() {
      setCount(count -1)
    }

  return (
    <div className='mt-5'>
      <button onClick={increment} className='btn-sm btn-primary'>Grace</button>
      <h4>{count}</h4>
      <button onClick={decrement} className='btn-sm btn-dark radius'>Sin</button>
    </div>
  )
}

export default Increment
