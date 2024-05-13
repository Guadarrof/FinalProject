import React, {useEffect, useRef} from 'react'

const Alert = ({children, onClose, show}) => {
  const alertRef = useRef();
  useEffect(() => {
    if (show) {
      alertRef.current.focus();
    }
  }, [show]);

  const handleEscPress = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  const handleBlur = (e) => {
    if (!alertRef.current.contains(e.relatedTarget)) {
      onClose();
    }
  };

  return show ? (
    <div className="alert_container">
      <div
        className="alert_content"
        tabIndex="0"
        ref={alertRef}
        onBlur={handleBlur}
        onKeyDown={handleEscPress}
      >
        {children}
      </div>
    </div>
  ) : undefined;
};

export default Alert;
