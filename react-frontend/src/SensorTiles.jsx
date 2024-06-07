import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile';

const PAGE_SIZE = 10;

const SensorTiles = () => {
  const [sensorData, setSensorData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/sensor?page=${currentPage}`);
        setSensorData(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching sensor data:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
        {loading ? (
        <div>Loading...</div>
        ) : (
        <>
            {sensorData.map((data, index) => (
            <Tile key={index} data={data} />
            ))}
            <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
            </button>
            <button onClick={handleNextPage}>Next</button>
            </div>
        </>
        )}
    </div>
  );
};

export default SensorTiles;
