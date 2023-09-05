import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';

import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

//.............................................................
class Cards extends Component {
   render() {
      return (
         <div className={styles.container}>
            <Card image={iphonex} name="iphone x" cost=" 500 $"/>
            <Card image={iphone11} name="iphone11" cost=" 600 $"/>
            <Card image={iphone12} name="iphone12" cost=" 700 $"/>
            <Card image={s21} name="s21 ultra" cost=" 670 $"/>
         </div>
      );
   }
}

export default Cards;