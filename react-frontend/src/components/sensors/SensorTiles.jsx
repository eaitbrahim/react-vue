import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile';
import PaginationButtons from '../shared/PaginationButtons';
import classes from './SensorTiles.module.css';

const SensorTiles = () => {
  const [sensorData, setSensorData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/sensor?page=${currentPage}`);
        setSensorData(response.data);
        const totalPagesHeader = response.headers['x-total-pages'];
        setTotalPages(totalPagesHeader);
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

  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={classes.SensorTiles}>
        {loading ? (
        <div>Loading...</div>
        ) : (
        <>
            {sensorData.map((data, index) => (
            <Tile key={index} data={data} />
            ))}
            <div className={classes.PaginationButtonsWrapper}>
              <PaginationButtons
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                isNextDisabled={isNextDisabled}
              />
            </div>
        </>
        )}
    </div>
  );
};

export default SensorTiles;
