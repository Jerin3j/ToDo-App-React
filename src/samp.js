import React from 'react'

function samp() {

    var obj={
        a: 3,
        b:"String"
    }

    var obj2= {
        ...obj
    }

    console.log(obj);
    console.log(obj2);
  return (
    <div>
      <p>{obj.b}</p>
    </div>
  )
}

export default samp
