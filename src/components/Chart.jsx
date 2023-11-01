import React, { useEffect, useState } from 'react'
import {
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
} from "recharts";
import { convertUnixTimestampToDate } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../features/Stock/stockService';

const Chart = () => {
    const dispatch = useDispatch()
    const datas = useSelector((st) => st.stock.data.d);
    const Tickers = useSelector((state) => state.stock.ticker);

    useEffect(() => {
        dispatch(fetchHistory({ symbol: Tickers, resolution: 'D', from: '1693566836', to: '1698837236' }))
    }, [dispatch])

    const formatData = (data) => {
        return data?.c?.map((item, index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index]),
            };
        });
    };

    return (
        <>


            <ResponsiveContainer>
                <AreaChart data={formatData(datas)}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor={"rgb(199 210 254)"}
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor={"rgb(199 210 254)"}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#312e81"
                        fill="url(#chartColor)"
                        fillOpacity={1}
                        strokeWidth={0.5}
                    />
                    <XAxis dataKey="date" />
                    <YAxis domain={["dataMax", "dataMin"]} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

export default Chart