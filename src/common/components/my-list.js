import React from 'react';
import './main.css';
import Container from './container';

/*<iframe src={url}></iframe>
const API_KEY='AIzaSyCRWo2eCLr9CtZb5x4HAxH7CP64q6a6x5k';
const url=`http://www.youtube.com/embed/${video.id}?rel=0`

id:string.isRequired,
title:string.isRequired,
description:string.isRequired,
thumbnailUrl:string.isRequired*/



const MyList = ({
  handleSearch
}) => (
<section className="wallpaper">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                  <div className="col">
                      <input onChange={e => handleSearch(e.target.value)} className="form-control form-control-md form-control-borderless" type="search" placeholder="Search topics or keywords"/>
                  </div>
                  <div className="col-auto">
                      <button className="btn btn-md clr" type="submit">Search</button>
                  </div>
              </div>
          </form>
      </div>
    </div>
    <Container/>
  </div>
</section>
);

export default MyList;
