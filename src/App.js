// import logo from './logo.svg';

import React, { Component } from 'react'
import Navber from './component/Navber'
import News1 from './component/News1'
import Navber2 from './component/Navber2'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import About_us from './component/About_us';
// import './App.css';

// import News from './component/News';




export default class App extends Component {

  render() {
	return (
		<BrowserRouter basename='/iconic-newsapp' >


		<Navber Name="Iconic News "  Home="Home" News="News" About="About" />
    {/* <News country="in" category="business" pageSize="5" heading="this is heading"   /> */}
		<Navber2/>
		
		<Routes>
   
          
          
   <Route path="/home" element={<News1 country="in" category="general" pageSize="5"  />}/>

   <Route path="/iconic-newsapp" element={
   <><Home/>
   <News1 country="in" category="general" pageSize="5"  /></>
   
  }/>
	 
   
   <Route path="/Business" element={<News1  PageSize="5"  country="in"  category="business" />}/>
	 
   
   <Route path="/Entertainment"element={<News1 PageSize="5"  country="in"  category="entertainment" />
   }/>
	 
			<Route path="/Health"element={<News1 PageSize="5"  country="in"  category="health" />}/>
	 
   
   <Route path="/Science"element={<News1 PageSize="5"  country="in"  category="science" />}/>
	 
   
   <Route path="/Sports"element={<News1 PageSize="5"  country="in"  category="sports" />}/>
	 
   
   <Route path="/Technology"element={<News1 PageSize="5"  country="in"  category="technology" />}/>
	 
   <Route path="/aboutus"element={<About_us/>}/>
	 
   
 
</Routes>
<Footer Name="Iconic News "/>
		
		</BrowserRouter>
	)
  }
}




