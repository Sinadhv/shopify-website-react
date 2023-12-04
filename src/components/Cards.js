import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";
import iphonex from "../images/iphone10.jpg";


class Cards extends Component {
 render() {
  return (
   <div className={styles.container}>
    <Card image ={iphonex} name= "Iphone X" cost="500 $" />
    <Card image ={iphonex} name= "Iphone X" cost="500 $" />
    <Card image ={iphonex} name= "Iphone X" cost="500 $" />
    <Card image ={iphonex} name= "Iphone X" cost="500 $" />
   </div>
  );
 }
}

export default Cards;