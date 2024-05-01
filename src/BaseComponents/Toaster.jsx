import React, { useState, useEffect } from 'react';
import { BsActivity } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { setToasterContent } from '../Features/appSlice';

const Toaster = () => {
    const content = useSelector(state => state.app.toasterContent);
    const [visible, setVisible] = useState(content !== "");
    const [count, setCount] = useState(10);

    useEffect(() => {
        let timer;
        if (visible) {
            timer = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [visible]);

    useEffect(() => {
        if (count <= 0) {
            setVisible(false);
        }
    }, [count]);

    useEffect(() => {
        if (content && !visible) {
            setVisible(true);
            setCount(10);
        }
    }, [content, visible]);

    return (
        <>
            {visible && (
                <div className={`fixed flex w-fit bottom-2 z-50 left-2 bg-white rounded-lg p-2`}>
                    <BsActivity />
                    <p className='font-semibold'>{content}</p>
                    <span>{count} s</span> 
                </div>
            )}
        </>
    );
};

export default Toaster;
