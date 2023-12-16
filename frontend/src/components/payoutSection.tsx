import { useEffect, useState } from 'react';
import bitcoinIcon from "../assets/Bitcoin.png";
import goldIcon from "../assets/gold.png";
import petrolIcon from "../assets/petrole.png";
import spIcon from "../assets/SP.png";

type ActionIcons = {
  [key: string]: string;
};

type AbbreviationAction = {
  [key: string]: string;
};

const PayoutSection = () => {
  const [data, setData] = useState(null);
  const [previousMentions, setPreviousMentions] = useState<{ [key: string]: number }>({});
  const [percentages, setPercentages] = useState<{ [key: string]: number }>({});

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

        const updatedPercentages: { [key: string]: number } = {};
        Object.keys(result.data).forEach((key) => {
          updatedPercentages[key] = generateRandomPercentage();
        });
        setPercentages(updatedPercentages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    const generateRandomPercentage = () => {
      return Math.floor(Math.random() * (50 - (-30) + 1)) + (-30);
    };

    const fetchPeriodically = () => {
      fetchData();

      const intervalId = setInterval(() => {
        fetchData();
      }, 3 * 60 * 1000); 
      return () => clearInterval(intervalId);
    };

    fetchPeriodically();
  }, []);

  useEffect(() => {
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
    if (previousValue === 0) return 0;
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const actionIcons: ActionIcons = {
    bitcoin: bitcoinIcon,
    gold: goldIcon,
    petrol: petrolIcon,
    "s&p 500": spIcon
  };

  const abbreviations: AbbreviationAction = {
    bitcoin: 'BTC',
    gold: 'GLD',
    petrol: 'CO',
    "s&p 500": '^GSPC'
  };

  const renderCards = () => {
    if (!data) {
      return <div className='flex justify-center section'><span className="loader"></span></div>;
    }

    const cards = Object.keys(data).map((key) => {
      const { mentions, polarity , percentages} = data[key][0];
      const abbreviation = abbreviations[key];
      const previousMention = previousMentions[key] || 0;
      const percentageChange = calculatePercentageChange(previousMention, mentions);
      console.log("calcul" + percentageChange);
      console.log("mentions précendentes" + previousMention);
      console.log("mentions en cours" + mentions);

      const evolutionIcon = (
        <div className={`flex flex-row gap-3 ${percentageChange > 0 ? 'positif-action' : 'negative-action'}`}>
          <span className="evolution-icon flex flex-row items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
              <path
                d="M0.99093 7.38211C1.09613 7.5771 1.29617 7.69867 1.51373 7.69867H4.90161V14.3881C4.90161 14.7259 5.16939 15 5.49933 15C5.82927 15 6.09705 14.7259 6.09705 14.3881V7.69867H9.48492C9.70329 7.69867 9.90332 7.5771 10.0077 7.38211C10.1137 7.18711 10.1065 6.94887 9.99099 6.7604L6.0054 0.285559C5.89542 0.107696 5.70494 0 5.49933 0C5.29371 0 5.10324 0.107696 4.99326 0.285559L1.00767 6.7604C0.947097 6.85994 0.916016 6.97335 0.916016 7.08676C0.916016 7.18792 0.941518 7.28991 0.99093 7.38211"
                fill="#11CABE"
              />
            </svg>
                
                <p>  {percentages}%</p>
          </span>
        </div>
      );

      return (
        <div key={key} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="card-trend flex flex-col gap-8 max-w-sm p-6 rounded-lg shadow dark:border-gray-700">
            <div className="flex flex-row justify-between">
              <div className="flex flext-row gap-5">
                <div>
                  {actionIcons[key] && <img src={actionIcons[key]} alt={`${key} icon`} className="icon-action" />}
                </div>
                <div className="flex-col text-left gap-4">
                  <span>{key}</span>
                  <div className='flex flex-row gap-2 pt-2'>
                    <p>
                      <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.4976 19.6833C19.0261 19.6833 23.168 16.4273 25.5 10.9999C23.168 5.57241 19.0261 2.31641 14.4976 2.31641H14.5024C9.97395 2.31641 5.832 5.57241 3.5 10.9999C5.832 16.4273 9.97395 19.6833 14.5024 19.6833H14.4976Z"
                          stroke="#FFD700"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.4566 11.0002C19.4566 13.6304 17.237 15.762 14.5 15.762C11.763 15.762 9.54492 13.6304 9.54492 11.0002C9.54492 8.36842 11.763 6.23682 14.5 6.23682C17.237 6.23682 19.4566 8.36842 19.4566 11.0002Z"
                          stroke="#FFD700"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </p>
                    {mentions}
                  </div>
                </div>
              </div>
              <div>
                <span className='title-or'>{abbreviation}</span>
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
