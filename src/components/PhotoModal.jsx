// components/PhotoModal.js
import { useState } from 'react';
import styles from "../styles/Dernierpro.module.css";


export default function PhotoModal({ imageUrl, buttonText = "Voir" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button 
        onClick={openModal}
        className={styles.button}
      >
        {buttonText}
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            
            <img src={imageUrl} alt="Photo complète" className="modal-image" />
          </div>
        </div>
      )}

      <style jsx>{`

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #333;
          z-index: 10;
        }

        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}