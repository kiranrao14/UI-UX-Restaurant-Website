import React from 'react';
import {images}  from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>
  <p className='P__cormorant' style={{color:'white'}}>{title}</p>
  <img src={images.spoon} alt='spoon' className='spoon__img'/>
    SubHeading
  </div>
);

export default SubHeading;
