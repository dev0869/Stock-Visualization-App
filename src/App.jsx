import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from './features/Stock/stockService'
import Layout from './Layout/Layout'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuote('AMZN'))
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
