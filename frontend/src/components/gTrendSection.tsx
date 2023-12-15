import React, { useState, useEffect } from 'react';
import { XYChart, AreaSeries, Grid, Axis, Tooltip, buildChartTheme } from '@visx/xychart';

const GraphiqueActions = () => {

  const customTheme = buildChartTheme({
    // colors
    backgroundColor: '#242430',
    colors: ['#FFD700'], // categorical colors, mapped to series via `dataKey`s

    // lines
    xAxisLineStyles: {
      stroke: 'none',
    },
    yAxisLineStyles: {
      stroke: 'none',
    },

    tickLength: 0,

    svgLabelSmall: {
      fill: '#fff',
      fontSize: 12,
    },

    svgLabelBig: {
      fill: '#fff', fontSize: 14, fontWeight: 600,
    },

    // grid
    gridColor: '#3E3F47',
    gridColorDark: '#3E3F47', // used for axis baseline if x/yxAxisLineStyles not set
    gridStyles: {
      stroke: '#3E3F47',
      strokeWidth: 1,
      strokeDasharray: '3px'
    }
  });

  const [transformedData, setTransformedData] = useState({});
  const [selectedType, setSelectedType] = useState('bitcoin');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const updatedData = {};

      Object.keys(data.data).forEach(type => {
        updatedData[type] = data.data[type][0]['google_trends'].map(entry => {
          const originalDate = new Date(parseInt(entry.timestamp) * 1000);
          const modifiedDate = new Date(originalDate);

          return {
            date: modifiedDate,
            value: parseInt(entry.values[0].value),
          };
        });
      });

      setTransformedData(updatedData);
      setLoading(false);

      console.log(updatedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  if (loading) {
    return <div className='flex justify-center section'><span className="loader"></span></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='text-center	section'>
      <h1 className="h2-title leading-none tracking-tight text-gray-900 dark:text-white pb-5">Maîtrisez le marché</h1>
      <p className="pb-10 text-lg font-normal text-[#E5E6ED] lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400">Notre tableau de bord transmute données<br /> complexes en stratégies de trading gagnantes</p>
      <div className="flex flex-col bg-[#242430] p-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-medium">Google Trends</h1>
          </div>
          <div className="min-w-min flex self-end mb-4">
            <select
              className="bg-[#3E3F47] px-3 py-1 outline-none rounded-md text-white"
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="gold">Gold</option>
              <option value="petrol">Petrol</option>
              <option value="s&p 500">S&P 500</option>
            </select>
          </div>
        </div>
        <XYChart
          height={400}
          xScale={{ type: 'utc' }}
          yScale={{ type: 'linear' }}
          margin={{ top: 40, right: 40, bottom: 60, left: 60 }}
          theme={
            customTheme
          }
        >
          <Grid columns={false} numTicks={5} />
          <Axis orientation="bottom" numTicks={4} label="Heure UTC" />
          <Axis orientation="left" numTicks={4} label="Mentions" />
          <AreaSeries data={transformedData[selectedType]} xAccessor={(d) => d.date} yAccessor={(d) => d.value} />
          <Tooltip
            showHorizontalCrosshair={false}
            showVerticalCrosshair={true}
            snapTooltipToDatumX={false}
            snapTooltipToDatumY={false}
            renderTooltip={({ tooltipData }) => {
              if (!tooltipData) return null;
              const date = tooltipData.nearestDatum?.datum?.date.toLocaleString();
              const value = tooltipData.nearestDatum?.datum?.value;
              return (
                <div style={{ backgroundColor: '', padding: '15px' }}>
                  <p>Date: {date}</p>
                  <p>Value: {value}</p>
                </div>
              );
            }}
          />
        </XYChart>
      </div>
    </div>
  );
};

export default GraphiqueActions;
