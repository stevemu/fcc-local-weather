import React, {Component} from 'react';
import styled from "styled-components";
import WebFont from 'webfontloader';
import Cloud from 'react-icons/lib/fa/cloud';
import axios from 'axios';
import {convertCToF, convertFToC} from "./utilities";

WebFont.load({
    google: {
        families: ['Droid Sans', 'Droid Serif']
    }
});

const Container = styled.div`
  font-family: "Droid Sans", "Droid Serif";
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  max-height: 100%;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 70px;
`;

const Location = styled.div`
  margin-top: 30px;
  font-size: 30px;
`;

const Temperature = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;

const Format = styled.a`
  color: #2A55FF;
  
  &:link, &:visited, &:active {
    color: #2A55FF;
  }
`;

class App extends Component {

    state = {
        city: "N/A",
        country: "N/A",
        tempF: "0",
        format: "F"
    };

    constructor() {
        super();

        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`).then((res) => {
                console.log(res.data);
                const data = res.data;
                const city = data.name;
                const country = data.sys.country;
                const temp = data.main.temp;

                this.setState({
                    city, country, tempF: temp, format: "F"
                });

            })
        })
    }

    changeFormat = (e) => {
        e.preventDefault();

        if (this.state.format === "C") {
            this.setState({format: "F"});
        } else if (this.state.format === "F") {
            this.setState({format: "C"});
        }

    };

    getTempInCurrentFormat = () => {
      if (this.state.format == "C") {
          return convertFToC(this.state.tempF);
      } else if (this.state.format == "F") {
          return this.state.tempF;
      }
    };

    render() {
        const {city, country, format} = this.state;
        const temp = this.getTempInCurrentFormat();

        return (
            <Container>
                <Title>Steve<Cloud/>Mu</Title>
                <Title>Weather App</Title>
                <Location>{city}, {country}</Location>
                <Temperature>{temp} °<Format onClick={this.changeFormat}>{format}</Format></Temperature>
            </Container>
        );
    }
}

export default App;
