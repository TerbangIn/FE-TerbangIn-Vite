import { useEffect } from 'react';
import JadwalPenerbangan from './Jadwal';
import Banner from './Banner';
import Destinasi from './Destinasi';
import { useDispatch, useSelector } from 'react-redux';
import { getFlight } from '../../actions/destinationAction';
import CompNavbar from '../../components/Navbar';

function Beranda() {
  const { flightData } = useSelector((state) => state.FlightDestinationReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
  }, [dispatch]);

  return (
    <>
      <CompNavbar />
      <Banner />
      <JadwalPenerbangan />
      <Destinasi data={flightData} />
    </>
  )
}

export default Beranda
