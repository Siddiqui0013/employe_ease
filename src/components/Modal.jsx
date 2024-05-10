import React from 'react';

const Modal = ({ onClose, children }) => {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex justify-center items-center" onClick={handleClickOutside}>
      <div className="modal bg-white rounded-lg shadow-md p-4">
        {children}
        <button className="mt-4 bg-blue-500 hover:bg-red-500 hover:text-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 focus:outline-none" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )}

  export default Modal