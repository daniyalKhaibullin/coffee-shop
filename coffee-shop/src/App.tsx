import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import photo1 from './photo1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo2.png';
import drink1 from './drink1.jpg';
import drink2 from './drink2.jpg';
import drink3 from './drink3.jpg';

  function App() {
    const [count, setCount] = useState(0);
  return (
    <div className='wrapper'>
      
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ width: '60px', height: '50px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* Change 'me-auto' to 'mx-auto' */}
              <li className="nav-item">
                <a className="nav-link" href="#">О нас</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Меню 
                </a>
                <ul className="dropdown-menu">
                  
                  <li><a className="dropdown-item" href="#">О нас</a></li>
                  <li><a className="dropdown-item" href="#">Меню</a></li>
                  <li><hr className="dropdown-divider"/>Контакты</li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Контакты</a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-primary me-2" type="button" style={{ backgroundColor: '#4c5841', color: 'white', border: '1px solid white' }}>Войти</button>
              <button className="btn btn-outline-success" type="button" style={{ backgroundColor: '#6e6f6c', color: 'white', border: 'none' }}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </nav>

      <Parallax pages={4} style={{ height: 'calc(100vh - 94px)' }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.5}
          style={{ backgroundImage: `url(${photo1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'brightness(0.4)' }}
        />
        <ParallaxLayer
          offset={0.2} 
          speed={0.05}>
            <div className="description">
              <h2>Влюбляйтесь в кофе с блаженным наслаждением</h2>
              <section>
                <p>Мы предлагаем вам лучший кофе в городе</p>
                <p>Приходите к нам и наслаждайтесь вкусом</p>
              </section>
            </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={0.1}
          factor={2}>
        <div className="menu">
          <h2>Наше меню</h2>
          <div className="drink-container">
            <div className="drink-box">
              <img src={drink1} alt="Drink 1" style={{ width: '200px', height: '200px' }} />
              <h3>Напиток 1</h3>
              <p>Описание напитка 1</p>
              <button className="btn btn-primary">Добавить в корзину</button>
            </div>
            <div className="drink-box">
              <img src={drink2} alt="Drink 2" style={{ width: '200px', height: '200px' }} />
              <h3>Напиток 2</h3>
              <p>Описание напитка 2</p>
              <button className="btn btn-primary">Добавить в корзину</button>
            </div>
            <div className="drink-box">
              <img src={drink3} alt="Drink 3" style={{ width: '200px', height: '200px' }} />
              <h3>Напиток 3</h3>
              <p>Описание напитка 3</p>
              <button className="btn btn-primary">Добавить в корзину</button>
            </div>
          </div>
        </div>
        </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={.9}
        factor={1}>
      <div className="contact">
        <h2>Контакты</h2>
        <p>Свяжитесь с нами по следующим контактам:</p>
        <ul>
            <li>Телефон: [номер телефона]</li>
            <li>Email: [адрес электронной почты]</li>
            <li>Адрес: [адрес кофейни]</li>
        </ul>
      </div>
      </ParallaxLayer>
      </Parallax>
      <footer>
        <p>© Год создания вашей кофейни. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App;
