import React, { useState } from "react";
import Modal from "react-modal";
import logo from "./görüntü.jpg";

Modal.setAppElement("#root");

export const Card1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className="hidden lg:flex flex-col rounded-md shadow-lg shadow-[#8500cc] absolute -top-80 bottom-0 m-auto left-10 bg-white h-fit w-1/6 cursor-pointer overflow-hidden"
        onClick={handleOpenModal}
      >
        <img src={logo} alt="" className="transform hover:scale-125 transition-transform duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-white bg-opacity-75">
          <svg
            className="w-16 h-16 text-black opacity-70 hover:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={{ overlay: { zIndex: 9999 } }}
      >
        <button
          type="button"
          className="bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded absolute top-0 right-0 mt-4 mr-4"
          onClick={handleCloseModal}
        >
          X
        </button>
        <iframe src="https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0" title="Aşiyan Anaokulu" width={1370} height={600}></iframe>
      </Modal>
    </>
  );
};
