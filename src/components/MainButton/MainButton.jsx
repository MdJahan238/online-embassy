import React from 'react';

const MainButton = ({children}) => {
    return (
            <button className="btn text-white bg-orange-600 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-400">{children}</button>

    );
};

export default MainButton;