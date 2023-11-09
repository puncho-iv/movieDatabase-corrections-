import React from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/footer'
import MovieList from '../../components/movie-list/movieList'

import './home.css'

const Home = () => {
  return (
   <div id='home'>

    <Nav/>  

    <MovieList/>
    
    <Footer id='footer'/>  

   </div>
  )
}

export default Home