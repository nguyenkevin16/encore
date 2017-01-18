import React from 'react';

const About = () => (
  <div className='about'>
    <div className='about-content'>
      <a href='https://github.com/nguyenkevin16/encore'>
        <h1> Encore Audio </h1>
      </a>

      <h3> Encore is a full-stack web application inspired by SoundCloud,
      built on Ruby on Rails and React.js/Redux. In two weeks,
      this app will satisfy the following minimum criteria with
      adequate CSS styling, smooth/bug-free navigation, and seed
      data: </h3>

      <ul>
        <li>Hosting on Heroku</li>
        <li>Sign Up / Sign In / Sign Out / Demo</li>
        <li>Production README</li>
        <li>Song CRUD</li>
        <li>Playing songs with progress bar with continuous play</li>
        <li>Comments</li>
        <li> User pages</li>
      </ul>
    </div>
  </div>
);

export default About;
