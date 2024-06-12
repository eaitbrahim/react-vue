import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile';
import PaginationButtons from '../shared/PaginationButtons';
import classes from './SensorTiles.module.css';
import { useTileMode } from '../../context/TileModeContext';

const SensorTiles = () => {
  const { expanded } = useTileMode();
  const [sensorData, setSensorData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080'); 

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      updateSensorData(newData);
    };

    return () => {
      ws.close();
    };
  }, []);

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

  const updateSensorData = (newData) => {
    setSensorData(prevData => {
      const index = prevData.findIndex(sensor => sensor.SensorId === newData.SensorId);
      if (index !== -1) {
        const updatedSensorData = [...prevData];
        updatedSensorData[index] = { ...updatedSensorData[index], ...newData };
        return updatedSensorData;
      }
      
      return prevData;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const isNextDisabled = currentPage === totalPages;
  const styleExpanded = {gridTemplateColumns: 'repeat(4, 1fr)'};
  const styleCollapsed = {gridTemplateColumns: 'repeat(10, 1fr)'};

  return (
    <div className={classes.SensorTiles} style={expanded ? styleExpanded : styleCollapsed}>
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
