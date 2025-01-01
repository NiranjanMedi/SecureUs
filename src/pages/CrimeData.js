import './App.css';
import React, { Component, useState } from 'react';
import './CrimeData.css';

const CrimeData = ({ score, district, mostPrevalentCrimes, crimeNewsHeadlines, sublocality, safetyRating }) => {

  return (
    <div className="my-8 py-5 w-full">
      <div>
        <div className="p-4 mb-20 mt-5">
          <div className="crime-score-content items-center justify-center">
            <h3 className="text-xl mb-2">Your Location: </h3>
            <h1 className="text-4xl mb-2">{district}</h1>
            <h2 className="text-2xl mb-12">{sublocality}</h2>
            <h3 className="text-xl mt-4 mb-2">Safety Rating:</h3>
            <h2 className="text-4xl text-center">{safetyRating}</h2>
          </div>
        </div>

        <div className="mt-4 p-4 crime-score-content">
          <h3 className="text-2xl mb-12 text-center">Most Prevalent Crimes in {district}:</h3>
          <ul className='crime-score-content items-center justify-center'>
            {mostPrevalentCrimes.map((crime, index) => (
              <li key={index} className="text-lg mb-6 text-center">
                {crime.crimeType.replace('Crime Type: ', '')}: {crime.count} cases
              </li>
            ))}
          </ul>
          <div className='prevalent-crimes-card'>
          <h3 className="text-2xl mt-6">Latest Crime News:</h3>
          {crimeNewsHeadlines.length === 0 ? (
            <div className="crime-news-item flex items-center space-x-3 py-2 border-t">
              <div className="crime-news-info">
                <h4 className="font-bold text-lg text-center">Not Available</h4>
              </div>
            </div>
          ) : (
            crimeNewsHeadlines
            .filter((article) =>
              article.title.toLowerCase().includes('crime') && 
              article.title.toLowerCase().includes({district}) ||
              article.title.toLowerCase().includes('rape') ||
              article.title.toLowerCase().includes('murder') ||
              article.title.toLowerCase().includes('assault') ||
              article.title.toLowerCase().includes('kidnapping')
            )
            .slice(0, 7)
            .map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="crime-news-item flex items-center space-x-3 py-2 border-t"
              >
                <div className="crime-news-info">
                  <h4 className="font-bold text-lg">{article.title}</h4>
                  <span className="text-sm text-primary">
                    {new Date(article.publishedAt).toDateString()}
                  </span>
                </div>
              </a>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeData;

/**
 * 
 * 
<div class="error">
    <div class="error__icon">
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#393a37"></path></svg>
    </div>
    <div class="error__title">lorem ipsum dolor sit amet</div>
    <div class="error__close"><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
</div>
 */