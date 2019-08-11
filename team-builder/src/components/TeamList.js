import React from 'react';


const TeamList = props => (

  <div className="teamList">
    <h3>Member:</h3>
    {props.list.map(member => (
      <span className="memberCard">{member.name}</span>
    ))}
  </div>
);

export default TeamList;
