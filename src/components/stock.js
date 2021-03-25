
import React from 'react';
// import Plot from 'react-plotly.js';
import { Table } from 'react-bootstrap';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          products: []
        }
      }

  componentDidMount() {
  
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = 'FB';
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    // const apiUrl="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";  
    fetch(apiUrl)
    .then(res => res.json())
    .then(
      (result) => {
         console.log("didmount",result);
        this.setState({
          products: result
        });
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  render() {
    const { error, products} = this.state;
    console.log(products,"ppp");


    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          
          <Table>
            <thead>
              <tr>
              
                <th>CompanyName</th>
                <th>Symbol</th>
                <th>MarketCap</th>
                <th>Price</th>

                {/* <th>Information</th>
                <th>Symbol</th>
                <th>LastRefreshed</th>
                <th>OutputSize</th>
                <th>TimeZone</th> */}
              </tr>
            </thead>
            <tbody>
              {products && products.length>0 && (products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  {/* <td>{product.Information}</td>
                  <td>{product.Symbol}</td>
                  <td>{product.LastRefreshed}</td>
                  <td>{product.OutputSize}</td>
                  <td>{product.TimeZone}</td> */}

                  <td>{product.CompanyName}</td>
                  <td>{product.Symbol}</td>
                  <td>{product.MarketCap}</td>
                  <td>{product.Price}</td>
                </tr>
              )))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default Stock;
