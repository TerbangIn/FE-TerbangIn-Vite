import { useEffect } from 'react';
import JadwalPenerbangan from './Jadwal';
import Navbar from '../../components/Navbar/Navbar';
import Banner from './Banner';
import Destinasi from './Destinasi';
import { useDispatch, useSelector } from 'react-redux';
import { getFlight } from '../../actions/destinationAction';

function Beranda() {
  const { flightData } = useSelector((state) => state.FlightDestinationReducer)
  console.log(flightData)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Banner />
      <JadwalPenerbangan />
      <Destinasi data={flightData}/>
    </>
  )
}

export default Beranda
