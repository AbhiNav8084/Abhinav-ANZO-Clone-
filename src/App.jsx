import React from 'react'
import Page1 from './pages/page1'
import Header from './components/Header'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'

const App = () => {
  return (
    <> 
      <div id="main">
        <Header />
        <Page1/>
        <Page2 />
        <Page3 />
      </div>
    </>
  )
}

export default App