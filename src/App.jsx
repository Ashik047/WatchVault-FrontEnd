import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Watchlist from './pages/Watchlist'
import Completed from './pages/Completed'
import New from './pages/New'
import ListContainer from './pages/ListContainer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movies" element={<ListContainer />}>        {/* A container component used for reducing the number of API calls */}
          <Route index element={<Navigate to="new" replace />} /> {/* redirecting "/movies" to "/movies/new" */}
          <Route path='new' element={<New />} />                  {/* no need for "/" before the path */}
          <Route path='watchlist' element={<Watchlist />} />
          <Route path='completed' element={<Completed />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
