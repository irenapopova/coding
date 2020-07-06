import React from 'react';
import { Link } from '@reach/router';

const Pet = props => {

  const { name, animal, breed, location, id } = props;


  return (
    <link to={`/data/${id}`} className='pet'>
      <div className="info">

        <h1>{name} </h1>
        <h2>{`${animal} - ${breed} . ${location}`</h2>

      </div>
    </link>
  );
};
export default Pet;