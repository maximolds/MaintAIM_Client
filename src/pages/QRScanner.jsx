import React, { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

function QRScanner() {

  const [scanResult, setScanResult] = useState(null);
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    })

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);



  return (


    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950 dark:text-white'>

      <Header
        style={{
          color: 'black'
        }}
        darkStyle={{
          color: 'white'
        }}
        
        title="Scan a QR Code!"
      />

      <div className='m-2 md:m-10 mt-2 p-2 md:p-10 bg-white
  rounded-3xl flex-1 md:flex shadow-xl justify-between flex-col flex-wrap'>
        <div className={`flex flex-wrap  border-black  
          ${activeMenu ? 'justify-center' : ' justify-center md:w[40%] items-center'}`}>
          <div className='mt-10'>
            {scanResult
              ? <div>QR Link: <span className='text-blue-400'><a href={scanResult}>{scanResult}</a> </span></div>
              : <div id='reader'></div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default QRScanner