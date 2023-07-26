import React from 'react'
import loading  from './Loading.gif'

const Spinner= () =>  {
    return (
      <div className='text-center'>
        <img src={loading} className='my-3' alt="" style={{width:"45px"}}/>
      </div>
    )
}

export default Spinner
