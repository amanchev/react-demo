import React, { Component } from 'react';

import Map from './Map';
import Filters from './Filters';
import ShippingMethods from './ShippingMethods';
import './Task2.css';


class Task2 extends Component {
  render() {
    return (
      <div className="task2 container">
        <form>
          <h4>Please choose your return method</h4>
          <input type="address"></input>
          <Map />
          <Filters />
          <ShippingMethods />
          <button type="submit">Procced</button>
        </form>
      </div>
    )
  }
}

// eslint-disable-next-line
const carrierServices = [
  {
    country: 'USA',
    name: 'USPS Domestic',
    requiredPrinter: true,
    price: 0,
    logoPath: './images/usps.png'
  },
  {
    country: 'USA',
    name: 'FedEx Domestic',
    requiredPrinter: false,
    price: 5,
    logoPath: './images/fedex.png'
  },
  {
    country: 'USA',
    name: 'FedEx SmartPost',
    requiredPrinter: false,
    price: 5,
    logoPath: './images/fedex.png'
  },
  {
    country: 'Saudi Arabia',
    name: 'DHL Worldwide',
    requiredPrinter: false,
    price: 5,
    logoPath: './images/dhl.png'
  },
  {
    country: 'Saudi Arabia',
    name: 'DHL Express Worldwide',
    requiredPrinter: false,
    price: 10,
    logoPath: './images/dhlexpress.png'
  },
  {
    country: 'Saudi Arabia',
    name: 'FedEx Domestic',
    requiredPrinter: false,
    price: 0,
    logoPath: './images/dhl.png'
  },
  {
    country: 'Israel',
    name: 'Israel Post Standard',
    requiredPrinter: true,
    price: 0,
    logoPath: './images/ip.png'
  },
  {
    country: 'Israel',
    name: 'UPS International',
    requiredPrinter: false,
    price: 7,
    logoPath: './images/ups.png'
  },
  {
    country: 'Russia',
    name: 'UPS International',
    requiredPrinter: false,
    price: 15,
    logoPath: './images/ups.png'
  },
]

export default Task2
