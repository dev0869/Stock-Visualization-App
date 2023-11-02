import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistory } from './features/Stock/stockService'
import Layout from './Layout/Layout'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
function App() {
  const dispatch = useDispatch();
  const Tickers = useSelector((state) => state.stock.ticker);

  useEffect(() => {
    dispatch(fetchHistory({ symbol: Tickers, resolution: 'D', from: '1693566836', to: '1698837236' }))
  }, [Tickers])


  return (
    <>
      <Layout >
        <div className='flex gap-4 flex-row'>
          <Main />
          <Sidebar />
        </div>
      </Layout>
    </>
  )
}

export default App
