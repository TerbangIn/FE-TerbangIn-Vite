import React from 'react'

export default function Modal({ visible, onClose }) {
    if (!visible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center'>
        <div className='bg-white p-2 rounded'>
            <button className='flex flex-col border-solid border-2 w-full'>Harga - Termurah</button>
            <button className='flex flex-col border-solid border-2 w-full'>Durasi - Terpendek</button>
            <button className='flex flex-col border-solid border-2 w-full'>Keberangkatan - Paling Awal</button>
            <button className='flex flex-col border-solid border-2 w-full'>Keberangkatan - Paling Akhir</button>
            <button className='flex flex-col border-solid border-2 w-full'>Kedatangan - Paling Awal</button>
            <button className='flex flex-col border-solid border-2 w-full'>Kedatangan - Paling Akhir</button>
            <button onClick={onClose}>X</button>
        </div>
    </div>
  )
}
