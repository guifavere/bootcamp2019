import React, { Component } from 'react';

class TechList extends Component
{
  state = {
    techs: ['Noje.js', 'ReactJS', 'React Native']
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>React JS</li>
        <li>React Native</li>
      </ul>
    )
  }
}

export default TechList;