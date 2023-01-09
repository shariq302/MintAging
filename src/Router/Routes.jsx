import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashLoader } from 'react-spinners';
import '../sass/Mint.scss';

const Mint_page = lazy(() => import('../screens/Mint'));

function Routers() {
  return (
    <BrowserRouter>
     <Suspense >
      <Routes>
        <Route path='/' element={<Mint_page />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default Routers
