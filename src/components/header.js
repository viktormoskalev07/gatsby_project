import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/iproject_logo.svg"
import logoMobile from "../images/iproject_logo_mobile.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"


const Header = () => {
  const [navOpen , setNavOpen ]= React.useState(false);
  React.useEffect(()=>{
    if(navOpen){
      document.body.style.overflow="hidden";
      document.body.style.height="100vh";
    } else{
      document.body.style.height="auto";
      document.body.style.overflow="";
    }
  }, [navOpen]);

  const [getStickyHeader , setStickyHeader] = React.useState(true);
  React.useEffect(() => {
    let pscroll = 0;
    const stickyHeader = ()=>{
      if(typeof window ==='undefined'){
        return
      }
      const pageYOffset = window.pageYOffset; 
      if (pscroll>pageYOffset&&pageYOffset>100){
        setStickyHeader(true);
        document.body.classList.add('is_sticky');
      } else { 
        setStickyHeader(false);
        document.body.classList.remove('is_sticky');
        }  
      pscroll=pageYOffset;
    };
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', stickyHeader);
    }
  }, [ ])

  let position =getStickyHeader?"fixed":"absolute" ;
  if (navOpen ){
    position="fixed";
  }
  
  return (
    <header style={{position:position }}  className={( getStickyHeader?" header_sticky ":'' ) + ( navOpen?"header_open":"")}  >
      <div class="wrapper">
        <div class="header_flex">
          <a href="/" class="header_logo">
            <img src={logo} alt="iproject logotype" class="logo_img" />
            <img src={logoMobile} alt="iproject logotype" class="logo_img_mobile" />
          </a>
          <ul class="header_list">
            <li class="header_list_li">
              <p className="header_nav_link header_nav_cursor_default header_nav_arrow" activeClassName="header_nav_active">Услуги</p>
              <ul class="submenu">
                <li class="submenu_li">
                  <Link to="/uslugi/dizajn-interera" className="submenu_li_a">Дизайн проект квартиры</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/dizajn-interera-domov" className="submenu_li_a">Дизайн проект дома</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/dizajn-interera-ofisov" className="submenu_li_a">Дизайн проект офиса</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/arxitekturnoe-proektirovanie" className="submenu_li_a">Архитектурное проектирование</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/avtorskoe-soprovozhdenie" className="submenu_li_a">Авторское сопровождение</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/soglasovanie" className="submenu_li_a">Согласование проекта</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/komplektaciya-obekta" className="submenu_li_a">Комплектация объекта</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/stroitelstvo-i-rekonstrukciya" className="submenu_li_a">Строительство и&nbsp;ремонт</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/portfolio" className="header_nav_link" activeClassName="header_nav_active">Портфолио</Link>
            </li>
            <li>
              <Link to="/cost" className="header_nav_link" activeClassName="header_nav_active">Стоимость</Link>
            </li>
            <li>
              <Link to="/video" className="header_nav_link" activeClassName="header_nav_active">Видео</Link>
            </li>
            <li>
              <Link to="/articles" className="header_nav_link" activeClassName="header_nav_active">Статьи</Link>
            </li>
            <li class="header_list_li">
              <Link to="/about" className="header_nav_link header_nav_arrow" activeClassName="header_nav_active">О нас</Link>
              <ul class="submenu">
                <li class="submenu_li">
                  <Link to="/about/reviews" className="submenu_li_a">Отзывы</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/about#diplomy" className="submenu_li_a">Награды</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/about/vacancy" className="submenu_li_a">Вакансии</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contacts" className="header_nav_link" activeClassName="header_nav_active">Контакты</Link>
            </li>
          </ul>
          {/* <a href="tel:+375293822550" class="header_phone">+375 29 382 25 50</a> */}
          <div onClick={()=>  {
            setNavOpen(!navOpen)}}  class="header_burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="header_mobile">
          <p className="header_mobile_nav">Портфолио</p>
          <ul class="header_mobile_list_1">
            <li>
              <Link to="/portfolio" className="header_mobile_nav_link" activeClassName="header_mobile_nav_active">Все проекты</Link>
            </li>
            <li>
              <Link to="/portfolio/interier" className="header_mobile_nav_link" activeClassName="header_mobile_active">Интерьеры</Link>
            </li>
            <li>
              <Link to="/portfolio/realize" className="header_mobile_nav_link" activeClassName="header_mobile_active">Реализованные</Link>
            </li>
            <li>
              <Link to="/portfolio/architecture" className="header_mobile_nav_link" activeClassName="header_mobile_active">Архитектура</Link>
            </li>
          </ul>
          <div className="header_mobile_line"></div>
          <p className="header_mobile_nav">Услуги</p>
          <ul class="header_mobile_list_2">
            <li>
              <Link to="/uslugi/dizajn-interera" className="header_mobile_nav_link" activeClassName="header_mobile_active">Дизайн проект квартир</Link>
            </li>
            <li>
              <Link to="/uslugi/dizajn-interera-domov" className="header_mobile_nav_link" activeClassName="header_mobile_active">Дизайн проект домов</Link>
            </li>
            <li>
              <Link to="/uslugi/dizajn-interera-ofisov" className="header_mobile_nav_link" activeClassName="header_mobile_active">Дизайн проект офисов</Link>
            </li>
            <li>
              <Link to="/uslugi/arxitekturnoe-proektirovanie" className="header_mobile_nav_link" activeClassName="header_mobile_active">Архитектурное проектирование</Link>
            </li>
          </ul>
          <ul class="header_mobile_list_2_1">
            <li>
              <Link to="/uslugi/stroitelstvo-i-rekonstrukciya" className="header_mobile_nav_link" activeClassName="header_mobile_active">Строительство и&nbsp;реконструкция</Link>
            </li>
            <li>
              <Link to="/uslugi/soglasovanie" className="header_mobile_nav_link" activeClassName="header_mobile_active">Согласование проекта</Link>
            </li>
            <li>
              <Link to="/uslugi/avtorskoe-soprovozhdenie" className="header_mobile_nav_link" activeClassName="header_mobile_active">Авторское сопровождение</Link>
            </li>
            <li>
              <Link to="/uslugi/komplektaciya-obekta" className="header_mobile_nav_link" activeClassName="header_mobile_active">Комплектация объекта</Link>
            </li>
          </ul>
          <div className="header_mobile_line"></div>
          <Link to="/contacts" className="header_mobile_nav" activeClassName="header_mobile_active">Контакты</Link>
          <ul class="header_mobile_list_3">
            <li>
              <Link to="/cost" className="header_mobile_nav_link" activeClassName="header_mobile_active">Стоимость</Link>
            </li>
            <li>
              <Link to="/video" className="header_mobile_nav_link" activeClassName="header_mobile_active">Видео</Link>
            </li>
            <li>
              <Link to="/articles" className="header_mobile_nav_link" activeClassName="header_mobile_active">Статьи</Link>
            </li>
            <li>
              <Link to="/about" className="header_mobile_nav_link" activeClassName="header_mobile_active">О нас</Link>
            </li>
            {/* <li>
              <Link to="/contacts" className="header_mobile_nav_link" activeClassName="header_mobile_active">Контакты</Link>
            </li> */}
            <li>
              <Link to="/about/vacancy" className="header_mobile_nav_link" activeClassName="header_mobile_active">Вакансии</Link>
            </li>
            <li>
              <Link to="/about/reviews" className="header_mobile_nav_link" activeClassName="header_mobile_active">Отзывы</Link>
            </li>
            {/* <li>
              <Link to="/about#diplomy" className="header_mobile_nav_link">Награды</Link>
              <AnchorLink to="/about#diplomy" title="Награды" className="header_mobile_nav_link" />
            </li> */}
            <div
              onClick={()=>  {
              setNavOpen(!navOpen)}}
            >
              <AnchorLink to="/about#diplomy" title="Награды" className="header_mobile_nav_link" />
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header