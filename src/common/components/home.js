import React from 'react';
import picture from '../../../public/makeup.jpg';
import './main.css';

const Home = () => (
<div>
<section>
  <div className="header">
    <div className="container">
      <h1>AYBeaty-e xoş gəlmisiniz </h1>
      <button className="list_button" type="submit">SIfarIş lIstInI yarat</button>
    </div>
  </div>  
</section>
<section>
  <div className="section_background">
    <div className="container">
      <div className="row center">
         <div className="col-md-5 wrap_img">
           <img src={picture} className="img" alt="Brush"/>
         </div>
         <div className="col-md-7 info">
            <h2>AYBeaty Online Shop Center</h2>
            <p>Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam Eaque Ipsa Quae Ab.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
         </div>
      </div> 
    </div>
  </div>
</section>
</div>
);


export default Home;
