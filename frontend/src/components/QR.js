import{Html5QrcodeScanner} from "html5-qrcode";
import { useEffect, useState } from 'react'; //html5-qrcode


const QR = () => {
   const[scanResult,setScnaResult] = useState(null);  //for QR code
   useEffect(()=>{  //for QR code start
    const scanner = new Html5QrcodeScanner('reader',{
        qrbox:{
          width:250,
          height:250
        },
        fps:10,
      });

    scanner.render(sucess,error);

    function sucess(result){
      scanner.clear();
      setScnaResult(result);
    }

    function error(err){
      console.warn(err);
    }
      },[]);

      return(
        <div className="App">
          <h1>Qr Code Scanning</h1>
          { scanResult
          ? <div>Success: <a href={scanResult}>{scanResult}</a></div> 
          : <div id="reader"></div>
          }
          </div>
      ); //for QR code end 


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default QR;