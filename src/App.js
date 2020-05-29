import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

//Much More Readable Code
import {Cards, Chart, CountryPicker} from './components';
import styles from './app.module.css';
import {fetchData} from './api';
import coronaImage from './images/covid-19-virus.jpg';
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount(){
    const fetcheddata = await fetchData();
    this.setState({ data: fetcheddata });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country});
  }
  render() {
    const { data , country} = this.state;
    return (
      
        <div className={styles.container}>
          <h1 className={styles.inrto}>Ahmed Ali Qureshi </h1>
          <h4> Covid-19 Reports</h4>
          <img className={styles.image} src={coronaImage} alt="COVID-19"/>
          <Cards data={data}/>
          <CountryPicker handleCountryChange = {this.handleCountryChange}/>
          <Chart data={data} country={country}/>
          
        </div>
        
      
    );
  }
}

export default App;
