import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/company';

import Sdata from './components/Sdata';
import Stock from './components/stock';
function App() {
  return (
     <>
     {/* Header section -1*/}
      <Header/>

    {/* google , facebook, amazon--pics */}
      < div className ="row-sm-4">
      <div className="flex-container" >   
      <Cards  imgsrc={Sdata[0].imgsrc}
      sname={Sdata[0].sname}
      link={Sdata[0].link}/>

       <Cards  imgsrc={Sdata[1].imgsrc}
      sname={Sdata[1].sname}
      link={Sdata[1].link}/>

       <Cards  imgsrc={Sdata[2].imgsrc}
      sname={Sdata[2].sname}
      link={Sdata[2].link}/>  
         </div>
      </div>

      {/* Curd API -- Stock market */}
      <div className="row" >
          <h4>Stock Market Table</h4>
          <input type="text" name="Search" id="" col-md-4 />
      </div>
      <Stock/>
     </>
  );
}

export default App;
