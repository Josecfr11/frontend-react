import React from 'react';

function Toast({ message, type, onClose }) {
    return (
        <div className={`toast show align-items-center text-bg-${type || 'primary'} border-0`} role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1050 }}>
            <div className="d-flex">
                <div className="toast-body">
                    {message}
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default Toast;
