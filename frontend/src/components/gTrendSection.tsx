import React, { useState, useEffect } from 'react';
import { XYChart, AreaSeries, Grid, Axis, Tooltip } from '@visx/xychart';

import CustomChartBackground from './CustomChartBackground';

const GraphiqueActions = () => {
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
          // modifiedDate.setHours(originalDate.getHours() + 1);

          return {
            date: modifiedDate,
            value: parseInt(entry.values[0].value),
          };
        });
      });

      setTransformedData(updatedData);
      setLoading(false);
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
    }, 10 * 60 * 1000);

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
    <div className="flex flex-col">
      <div className="min-w-min flex self-end">
        <select className="bg-[#3E3F47] px-3 py-1 outline-none rounded-md" value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
          <option value="bitcoin">Bitcoin</option>
          <option value="gold">Gold</option>
          <option value="petrol">Petrol</option>
        </select>
      </div>
      <XYChart
        height={400}
        xScale={{ type: 'time' }}
        yScale={{ type: 'linear' }}
        margin={{ top: 40, right: 40, bottom: 60, left: 60 }}
      >
        <Grid columns={false} numTicks={5} />
        <Axis orientation="bottom" numTicks={6} />
        <Axis orientation="left" numTicks={5} />
        <AreaSeries data={transformedData[selectedType]} xAccessor={(d) => d.date} yAccessor={(d) => d.value} />
        <Tooltip
          showHorizontalCrosshair={false}
          showVerticalCrosshair={true}
          snapTooltipToDatumX={true}
          snapTooltipToDatumY={true}
          renderTooltip={({ tooltipData }) => {
            if (!tooltipData) return null;
            const date = tooltipData.nearestDatum?.datum?.date.toLocaleString();
            const value = tooltipData.nearestDatum?.datum?.value;
            return (
              <div style={{ backgroundColor: 'white', padding: '8px', border: '1px solid #ddd' }}>
                <p>Date: {date}</p>
                <p>Value: {value}</p>
              </div>
            );
          }}
        />
      </XYChart>
    </div>
  );
};

export default GraphiqueActions;
