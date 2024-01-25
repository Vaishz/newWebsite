/*import React, { useState, useEffect } from 'react';
import Newsletter from './Newsletter';

const Modal = () => {
    const [showModal, setshowModal] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => setshowModal(true), 5000); // Open modal after 5 seconds

        return () => clearTimeout(timeoutId); // Clear the timeout on unmount or if the button is clicked
    }, []);

    return (
        <>
            <button onClick={() => { setshowModal(true); clearTimeout(timeoutId); }} className='bg-red-200'>
                ShowPopo!
            </button>
            {showModal && <Newsletter closeModal={() => setshowModal(false)} />}
        </>
    );
};

export default Modal;*/
