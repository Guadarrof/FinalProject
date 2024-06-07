import React, { useEffect, useRef } from 'react';

const Alert = ({ children, onClose, show }) => {
  const alertRef = useRef();

  useEffect(() => {
    if (show) {
      alertRef.current.classList.add('show');
      alertRef.current.focus();
    } else {
      alertRef.current.classList.remove('show');
    }
  }, [show]);

  const handleEscPress = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBlur = (e) => {
    if (!alertRef.current.contains(e.relatedTarget)) {
      onClose();
    }
  };

  return (
    <div
      className="alert_container"
      tabIndex="0"
      ref={alertRef}
      onBlur={handleBlur}
      onKeyDown={handleEscPress}
    >
      {children}
    </div>
  );
};

export default Alert;
