import React from 'react';
import './App.css';
import { NewsFeedList } from './components/NewsFeedList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FindMore } from './components/FindMore';

function App() {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <NewsFeedList/>
      <FindMore/>
      <Footer/>
    </div>
  );
}

export default App;
