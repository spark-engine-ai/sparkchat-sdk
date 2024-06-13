'use client';
import React from 'react';
import { Chatbot } from '../components/chatbot';
import { Navbar } from '../components/navbar';
import './global.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Chatbot />
    </div>
  );
};

export default Home;
