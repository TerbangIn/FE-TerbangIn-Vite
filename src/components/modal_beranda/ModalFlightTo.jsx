import React, { useState } from 'react';
import { List, Button, Modal } from 'antd';
import { useSelector } from 'react-redux';

const ModalFlightFrom = ({ value, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const { flightData } = useSelector((state) => state.FlightDestinationReducer);

  const options = flightData.map((data) => `${data.destination.country} (${data.destination.code})`);

  const [selectedOption, setSelectedOption] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSelection = (selectedValue) => {
    setIsModalOpen(false);
    setSelectedOption(selectedValue);
  };

  return (
    <>
      <div className="font-bold text-base md:text-base cursor-pointer ml-3 md:ml-4" onClick={showModal}>
        {selectedOption ? selectedOption : value}
      </div>
      <Modal title="TerbangIn" visible={isModalOpen} footer={null}>
        <List
          itemLayout="horizontal"
          dataSource={options}
          renderItem={(item, index) => (
            <List.Item onClick={() => handleSelection(item)} className={selectedOption === item ? 'selected' : ''}>
              <div className="text-md font-bold cursor-pointer">{item}</div>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default ModalFlightFrom;
