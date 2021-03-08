import React from 'react';
import reDashboard from '../assets/r_e_dashboard.png';
import portfolio from '../assets/portfolio_screenshot.png';
import todo from '../assets/todo.png';

export const slideData = [
  {
    id: 1,
    slideHeader: 'Real Estate Management Dashboard',
    imgSrc: reDashboard,
    projectLink: 'https://drive.google.com/drive/folders/1iRwDndR9BYR_-bVtEYO69jhZGI9flMhi?usp=sharing',
    slideDescription:
  <div>
    The goal of this project was so I could learn how a new web API could be
    created and hooked up to a React application from start to finish. The
    inspiration for this project was taken from a video that I found&nbsp;
    <a href="https://www.youtube.com/watch?v=tNsveb6RRGA" target="_blank" rel="noopener noreferrer">here</a>
    . I used a screen shot of the finished screen at the end of the video as my
    mockup, where I attempted to re-create the front-end without looking at the
    original solution. From there, I then used that screen as a jumping off point
    to create and set up a web API from scratch, along with a basic database
    schema that was inferred from the data that I noticed in the mockup. I leveraged
    IIS Express and one of Visual Studio&apos;s web API templates to set up the API
    layer that was used to hydrate my front-end screen.
  </div>,
  },
  {
    id: 2,
    slideHeader: 'My Portfolio',
    imgSrc: portfolio,
    projectLink: 'https://drive.google.com/drive/folders/1Xhm0RJvrvVjRRKvQ4PG7VUzfb4qS0lrG?usp=sharing',
    slideDescription: 'A purely front-end driven project, intended to store any projects or work experiences that I can as I progress through my career. It is my personal website that you are on right now!',
  },
  {
    id: 3,
    slideHeader: 'Coming Soon',
    imgSrc: todo,
    projectLink: '',
    slideDescription: 'More coming soon!',
  },
];

export default slideData;
