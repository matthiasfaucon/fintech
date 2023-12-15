import React, { useEffect, useState } from 'react';
import bitcoinIcon from "../assets/Bitcoin.png";
import goldIcon from "../assets/gold.png";

type ActionIcons = {
    [key: string]: string;
  };

type AbbreviationAction = {
    [key: string]: string;
  };

const PayoutSection = () => {
  const [data, setData] = useState(null);
  const [previousMentions, setPreviousMentions] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const result = await response.json();

        setData(result.data);
        const storedMentions = localStorage.getItem('previousMentions');
        if (storedMentions) {
          setPreviousMentions(JSON.parse(storedMentions));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Save current mentions to localStorage
    if (data) {
      const currentMentions: { [key: string]: number } = {};
      Object.keys(data).forEach((key) => {
        const actionData = data[key] as Array<any>;
        if (Array.isArray(actionData) && actionData.length > 0) {
          currentMentions[key] = actionData[0].mentions as number;
        }
      });
      localStorage.setItem('previousMentions', JSON.stringify(currentMentions));
      setPreviousMentions(currentMentions);
    }
  }, [data]);
  
  
  

  const calculatePercentageChange = (previousValue: number, currentValue: number): number => {
    if (previousValue === 0) return 0; // To avoid division by zero
    return ((currentValue - previousValue) / previousValue) * 100;
  };
  

  const actionIcons: ActionIcons = {
    bitcoin: bitcoinIcon,
    gold: goldIcon,
  };

  const abbreviations: AbbreviationAction = {
    bitcoin: 'BTC',
    gold: 'GLD', 
  };

  const renderCards = () => {
    if (!data) {
      return <div className='flex justify-center section'><span className="loader"></span></div>;
    }

    const cards = Object.keys(data).map((key) => {
      const { mentions, polarity, subjectivity } = data[key][0];
      const abbreviation = abbreviations[key];  
      const previousMention = previousMentions[key] || 0;
      const percentageChange = calculatePercentageChange(previousMention, mentions);


      let evolutionIcon;

      if (percentageChange === 0) {
        evolutionIcon = <span className="evolution-icon-neutre">-</span>;
      } else if (percentageChange > 0) {
        evolutionIcon = 
        <div className='positif-action flex flex-row gap-3'>
        <span className="evolution-icon positive">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
        <path d="M0.99093 7.38211C1.09613 7.5771 1.29617 7.69867 1.51373 7.69867H4.90161V14.3881C4.90161 14.7259 5.16939 15 5.49933 15C5.82927 15 6.09705 14.7259 6.09705 14.3881V7.69867H9.48492C9.70329 7.69867 9.90332 7.5771 10.0077 7.38211C10.1137 7.18711 10.1065 6.94887 9.99099 6.7604L6.0054 0.285559C5.89542 0.107696 5.70494 0 5.49933 0C5.29371 0 5.10324 0.107696 4.99326 0.285559L1.00767 6.7604C0.947097 6.85994 0.916016 6.97335 0.916016 7.08676C0.916016 7.18792 0.941518 7.28991 0.99093 7.38211" fill="#11CABE"/>
        </svg>
        <p>{percentageChange.toFixed(2)}%</p>
        </span>
        </div>
        ;
      } else {
        evolutionIcon = <div className='negative-action flex flex-row gap-3'>
        <span className="evolution-icon negative">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
        <path d="M9.50777 7.61789C9.40257 7.4229 9.20253 7.30133 8.98496 7.30133H5.59709V0.611912C5.59709 0.274137 5.32931 0 4.99937 0C4.66943 0 4.40165 0.274137 4.40165 0.611912V7.30133H1.01378C0.795411 7.30133 0.595374 7.4229 0.490972 7.61789C0.384977 7.81289 0.392149 8.05113 0.507708 8.2396L4.4933 14.7144C4.60328 14.8923 4.79375 15 4.99937 15C5.20499 15 5.39546 14.8923 5.50544 14.7144L9.49103 8.2396C9.5516 8.14006 9.58268 8.02665 9.58268 7.91324C9.58268 7.81207 9.55718 7.71009 9.50777 7.61789" fill="#FA2256"/>
        </svg>
        <p>{percentageChange.toFixed(2)}%</p>
        </span>
        </div>
      }

      return (
        <div key={key} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="card-trend flex flex-col gap-8 max-w-sm p-6 rounded-lg shadow dark:border-gray-700">
            <div className="flex flex-row justify-between">
              <div className="flex flext-row gap-5">
                <div>
                  {actionIcons[key] && <img src={actionIcons[key]}  alt={`${key} icon`} className="icon-action" />}
                </div>
                <div className="flex-col text-left gap-4">
                  <span>{key}</span>
                  <div className='flex flex-row gap-2 pt-2'>
                    <p>
                    <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.4976 19.6833C19.0261 19.6833 23.168 16.4273 25.5 10.9999C23.168 5.57241 19.0261 2.31641 14.4976 2.31641H14.5024C9.97395 2.31641 5.832 5.57241 3.5 10.9999C5.832 16.4273 9.97395 19.6833 14.5024 19.6833H14.4976Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.4566 11.0002C19.4566 13.6304 17.237 15.762 14.5 15.762C11.763 15.762 9.54492 13.6304 9.54492 11.0002C9.54492 8.36842 11.763 6.23682 14.5 6.23682C17.237 6.23682 19.4566 8.36842 19.4566 11.0002Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </p>
                  {mentions}
                  </div>
                  
                </div>
              </div>
              <div>
                <span>{abbreviation}</span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <span>polarité: {polarity * 100 } %</span>
              <span>{evolutionIcon}</span>
            </div>
          </div>
        </div>
      );
    });

    return cards;
  };

  return (
    <div className='text-center section'>
      <h2 className="h2-title mb-4 leading-none tracking-tight text-gray-900 dark:text-white">
        <span className="title-or">Choisissez l'excellence </span>avec notre sélection d'actions <br/> à fort potentiel d'achat
      </h2>

      <div className="card-container">
        {renderCards()}
      </div>
    </div>
  );
};

export default PayoutSection;
