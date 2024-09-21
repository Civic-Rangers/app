import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); 
    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div className={`toast toast-${type} fixed bottom-12 left-1/2 transform -translate-x-1/2`}>
      <div className={`alert alert-${type}`}>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 btn btn-sm btn-circle btn-ghost">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;