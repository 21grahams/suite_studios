import React from 'react';

const Display = ({ trigger }) => {

  return (
    <div>
      {trigger.quote ? <p className='quotes'>{trigger.quote}</p> : null}
    </div>
  )
}

export default Display;