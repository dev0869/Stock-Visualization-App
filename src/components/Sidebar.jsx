import React, { useDebugValue, useState } from 'react';
import { selectTickers } from '../features/Stock/stockSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch();
    const Tickers = useSelector((state) => state.stock.ticker);
    console.log(Tickers);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
        dispatch(selectTickers(value))
    };

    const values = ['AAPL', 'MSFT', 'TSLA', 'AMZN', 'META'];

    return (
        <div className="bg-[#191A3C] p-4 rounded-lg flex-[2]">
            <p className='text-center text-2xl  font-bold mb-4 text-white'>Select Stock</p>
            {values.map((ele) => (
                <div
                    key={ele}
                    className={`p-2 rounded-lg cursor-pointer ${selectedValue === ele ? 'bg-[#4F46E5] text-white font-semibold' : ''}`}
                    onClick={() => handleSelect(ele)}
                >
                    <p>
                        {ele}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
