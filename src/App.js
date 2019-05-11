import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import Chiffre from './chiffres';
import Lieu from './lieu';
import tunis from './amine.jpg';
import sousse from './sousse.jpg';
import sfax from './sfax.jpg';
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="h1">Nos programmes</h1>
        <div className="box">
          <div className="full">
            <Box title="FULL TIME PROGRAM" des="FULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAM" />
          </div>
          <div className="part">
            <Box title="PART TIME PROGRAM" des="PART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART T" />
          </div>
          <div className="kids">
            <Box title="KIDS CODING PROGRAM" des="KIDS CODING PROGRAM KIDS CODING PROGRAM KIDS CODING PROGRAM KIDS CODING PROGRAMKIDS CODING PROGRAM KIDS CODING PROGRAM KIDS CODING PROGRAM" />
          </div>
          <div className="summer">
            <Box title="SUMMER ACADEMY" des="SUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMY" />
          </div>
        </div>

        <div className="numbers">
          <h1 className="h1">Quelques chiffres</h1>
          <div className="number1">
            <Chiffre number="+20.000" des="passionnés du digital" />
          </div>
          <div className="number2">
            <Chiffre number="+500" des="étudiants en août 2016" />
          </div>
          <div className="number3">
            <Chiffre number="+300" des="produits développés" />
          </div>
          <div className="number4">
            <Chiffre number="+30" des="instructeurs game, Web et mobile" />
          </div>
          <div className="number5">
            <Chiffre number="+50" des="SPEAKERS" />
          </div>
          <div className="number6">
            <Chiffre number="400m2" des="de hackerspace au coeur du lac" />
          </div>
        </div>

        <div className="place" style={{display: "flex"}}>
        
          <div className="tunis">
            <Lieu pic={tunis} detail="Tunis" />
          </div>
          <div className="sousse">
            <Lieu pic={sousse} detail="Sousse" />
          </div>
          <div className="sfax">
            <Lieu pic={sfax} detail="Sfax" />
          </div>
        </div>

      </div>
    );
  }
}
export default App;