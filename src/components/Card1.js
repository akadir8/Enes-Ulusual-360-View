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
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#8500cc] absolute top-0 bottom-0 m-auto right-10 bg-slate-50 p-6 h-fit w-1/4">
        <img src={logo} alt="" />
        <button
          type="button"
          className="bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded"
          onClick={handleOpenModal}
        >
          Göz atın
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={{ overlay: { zIndex: 9999 } }}
      >
        <img src={logo} alt="" height={200} width={200} />
        <button
          type="button"
          className="bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded absolute top-0 right-0 mt-4 mr-4"
          onClick={handleCloseModal}
        >
          X
        </button>

        <a
          href="https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0"
          className="bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded absolute bottom-0 right-0 m-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          360° gezinti yapmak ister misiniz ?
        </a>
      </Modal>
    </>
  );
};
