import * as React from "react"
import { Link } from "gatsby"
import logoMobile from "../images/iproject_logo_mobile.svg"

const HeaderSticky = () => {
  return (
    <header>
      <div class="wrapper">
        <div class="header_flex">
          <a href="/" class="header_logo">
            <img src={logoMobile} alt="iproject logotype" class="logo_img_mobile" />
          </a>
          <a href="tel:+375293822550" class="header_phone">+375 29 382 25 50</a>
          <div class="header_burger">
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
              <Link to="/portfolio/" className="header_mobile_nav_link" activeClassName="header_mobile_nav_active">Все проекты</Link>
            </li>
            <li>
              <Link to="/portfolio/interier/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Интерьеры</Link>
            </li>
            <li>
              <Link to="/portfolio/realize/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Реализованные</Link>
            </li>
            <li>
              <Link to="/portfolio/architecture/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Архитектура</Link>
            </li>
          </ul>
          <div className="header_mobile_line"></div>
          <p className="header_mobile_nav">Услуги</p>
          <ul class="header_mobile_list_2">
            <li>
              <Link to="/uslugi/dizajn-interera/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Дизайн интерьера квартир</Link>
            </li>
            <li>
              <Link to="/uslugi/dizajn-interera-domov/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Дизайн интерьера домов</Link>
            </li>
            <li>
              <Link to="/uslugi/arxitekturnoe-proektirovanie/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Архитектурное проектирование</Link>
            </li>
            <li>
              <Link to="/uslugi/dizajn-interera-ofisov/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Дизайн офисов</Link>
            </li>
            <li>
              <Link to="/uslugi/stroitelstvo-i-rekonstrukciya/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Строительство и реконструкция</Link>
            </li>
            <li>
              <Link to="/uslugi/avtorskoe-soprovozhdenie/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Авторское сопровождение</Link>
            </li>
            <li>
              <Link to="/uslugi/soglasovanie/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Согласование проекта</Link>
            </li>
            <li>
              <Link to="/uslugi/komplektaciya-obekta/" className="header_mobile_nav_link" activeClassName="header_mobile_active">Комплектация объекта</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default HeaderSticky