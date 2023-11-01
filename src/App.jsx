import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistory, fetchQuote } from './features/Stock/stockService'
import Layout from './Layout/Layout'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHistory({ symbol: 'AAPL', resolution: 'D', from: '1572566400', to: '1574985600' }))
  }, [])


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
