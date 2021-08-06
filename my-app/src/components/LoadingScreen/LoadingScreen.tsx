import './LoadingScreen.css';
import React from 'react';

interface ILoadingScreen {}

const LoadingScreen: React.FC<ILoadingScreen> = (props) => (
  <div>
    <div className="container">
      <div className="loader">
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--text" />
      </div>
    </div>
  </div>
);
export default LoadingScreen;
