import React, {useState, useEffect} from 'react'
import ReactLoading from 'react-loading';
import { fetchData } from '../../hooks/fetchData';
import * as C from './styles.js'

const Preloader = ( {children} ) => {

    const [done, setDone] = useState(undefined);

	useEffect(() => {
        setTimeout(() => {
            setDone(true)
        }, 2500)
	}, []);

  return (
    <>
        {!done ? (
            <C.LoaderContainer>
                <C.Loader>
                    <ReactLoading type={"bars"} color={"#00CDB4"} height={100} width={100} />
                </C.Loader>
            </C.LoaderContainer>
        ) : (
            false
        )}
    </>
  )
}

export default Preloader;