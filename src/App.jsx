import { useState } from 'react'
import './App.css'
import {Header, Footer, Container} from "./components/index";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='h-auto min-h-[100vh] w-screen relative overflow-hidden bg-[#0F172A] '>
      <Header />
        <Container>
          <Outlet />
        </Container>
      {/* <Footer /> */}
    </div>
  )
}

export default App
