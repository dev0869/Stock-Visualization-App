import React, { useEffect, useState } from 'react'
import {
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
} from "recharts";
import { chartConfig } from '../constants/config';
// import { mockHistoricalData } from '../constants/mock'
import { convertUnixTimestampToDate } from '../utils';
import ChartFilter from './ChartFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../features/Stock/stockService';
const Chart = () => {
    const dispatch = useDispatch()
    // const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W")
    const datas = useSelector((st) => st.stock.data.d);
    console.log(datas);
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

            <ul className="flex absolute top-2 right-2 z-40">
                {Object.keys(chartConfig).map((item) => (
                    <li key={item}>
                        <ChartFilter
                            text={item}
                            active={filter === item}
                            onClick={() => {
                                setFilter(item);
                            }}
                        />
                    </li>
                ))}
            </ul>
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
                    <Tooltip

                    />
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