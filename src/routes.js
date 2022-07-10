import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './error'
import Header from './header'
import Posts from './posts'
import Produto from './Produto'
import Sobre from './sobre'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/sobre" element={<Sobre />} />

        {/* Para usar parâmetros */}
        <Route path="/produto/:id" element={<Produto />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
