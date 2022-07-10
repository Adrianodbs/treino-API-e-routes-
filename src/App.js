import Header from './header'
import RoutesApp from './routes'
import './style.css'

function App() {
  return (
    <div className="container">
      <RoutesApp />
    </div>
  )
}

export default App

// {nutri.map(item => {
//   return (
//     <article key={item.id} className="post">
//       <strong className="titulo">{item.titulo}</strong>
//       <img src={item.capa} alt={item.titulo} className="capa" />
//       <p className="subtitulo">{item.subtitulo}</p>
//       <a className="botao">Acessar</a>
//     </article>
//   )
// })}
