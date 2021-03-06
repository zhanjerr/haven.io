import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts'

export default class RadarPie extends React.Component{
  render(){
    return(
      <div className="radar-pie">
      <p>Accuity Index per User</p>
        <RadarChart cx={185} cy={155} outerRadius={120} width={400} height={350} data={this.props.data}>
          <Radar name="Radar" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
        </RadarChart>
      </div>
    )
  }
}