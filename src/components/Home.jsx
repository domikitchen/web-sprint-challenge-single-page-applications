import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function Home() {
    const [team, setTeam] = useState([]);
  
    
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`)
      .then(response => {
        setTeam(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

    console.log(team);
    return(
    <div>
        <h2>Your favorite food, delivered while coding!</h2>
        <Link to = '/pizza-Form'>Pizza?</Link>
        <h4>Meet the team!</h4>
        {
            team.map(member => {
                return(
                    <div key = {member.id}>
                        <p>{member[`first_name`]} {member[`last_name`]}</p>
                        <p>{member[`email`]}</p>
                    </div>
                );
            })
        }
    </div>
    );
}