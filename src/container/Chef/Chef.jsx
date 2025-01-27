import React from 'react';
import {SubHeading} from '../../components';
import {images} from  '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
  <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt='chef'/>
  </div>
  <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>What we blieve In</h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote'/>
        <p className='P__opensans' style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error ipsam voluptatum blanditiis quae, excepturi tempora unde officia molestias dicta dignissimos. Ipsam sit facilis sunt, perferendis veritatis dolorum fugiat quia!auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
<div className='app__chef-sign'>
  <p>Kevin Luo</p>
  <p className='p__opensans'>Chef & Founder</p>
  <img src={images.sign} alt='sign'/>
</div>
    </div>
  </div>
  </div>
);

export default Chef;
