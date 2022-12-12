import React from 'react'
import { TailSpin } from 'react-loader-spinner';

function Loader() {
  return (
    <TailSpin
        height="19"
        width="19"
        color="#ffffff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
  )
}

export default Loader