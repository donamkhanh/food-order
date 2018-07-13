import React from 'react';

const Titles = () => {
    const today = new Date();       

    return(
        <div>
            <h1 className="title-container__title">Đặt Cơm Trưa</h1>
            <h3 className="title-container__subtitle">Ngày { `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}` }</h3>            
        </div>
    );
}

export default Titles;