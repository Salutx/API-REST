import React, {useState, useEffect} from 'react'
import ReactLoading from 'react-loading';
import * as C from './styles.js'

const Preloader = ( { text } ) => {

    const [done, setDone] = useState(undefined);

	useEffect(() => {
        setTimeout(() => {
            setDone(true)
        }, 1300)
	}, []);

  return (
    <>
        {!done ? (
            <C.LoaderContainer>
                <C.Loader>
                    <ReactLoading type={"spin"} color={"#00CDB4"} height={50} width={50} />
                    <h1>{text}</h1>
                </C.Loader>
            </C.LoaderContainer>
        ) : (
            false
        )}
    </>
  )
}

export default Preloader;