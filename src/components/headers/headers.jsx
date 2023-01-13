// import React, { Component } from 'react'
// import './headers.css'

// class Header extends Component {
//   state = { 
//     whatsPopular: [ "Streaming", "On TV", "For Rent", "In Theatres" ],
//     freeToWatch: [ "Movies", "TV"],
//     latestTrailers: ["Streaming", "On TV", "For Rent", "In Theatres" ],
//     trending: ["Today", "This Week"]
//    } 

//   render() { 

//     return (
//       <section id='header'>
//         <header className='headerListing' id='header-menu'>
//           <li className='headerList'>What's Popular
//           <ul id='tabs'>{this.state.whatsPopular.map(whatsPopular => <li>{whatsPopular}</li>)}</ul>
//           </li>
//           <li className='headerList'>Free To Watch
//           <ul id='tabs'>{this.state.freeToWatch.map(freeToWatch => <li>{freeToWatch}</li>)}</ul>
//           </li>
//           <li className='headerList'>Latest Trailers
//           <ul id='tabs'>{this.state.latestTrailers.map(latestTrailers => <li>{latestTrailers}</li>)}</ul>
//           </li>
//         </header>
//       </section>
//     );
//   }
// }
 
// export default Header;

import React, { useState } from 'react'
import './headers.css'
import {Link} from 'react-router-dom'

const headers = ["Streaming", "On TV", "For Rent", "In Theatres"]

const Header = () => {
  return (
    <section id='header'>
      <header className='headerListing' id='header-menu'>
        <li className='headerList'>What's Popular
        <ul id='tabs'>

          {
            headers.map((value) => {
              return(
                <li><Link to="">{value}</Link></li>
              )
            })
          }
          </ul>
        </li>
      </header>

    </section>
  )
}

export default Header
 