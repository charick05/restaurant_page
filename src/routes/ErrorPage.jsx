import { Link } from "react-router-dom"

export const ErrorPage = () => {
   return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center', height: '300px'}}>
         <h1>Страница не найдена</h1>
         <Link to={'/'}><h3 style={{color: '#D58C51'}}>На главную</h3></Link>
      </div>
   )
}