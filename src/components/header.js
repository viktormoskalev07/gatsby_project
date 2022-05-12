import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/iproject_logo.svg"
import logoMobile from "../images/iproject_logo_mobile.svg"

const Header = () => {
  return (
    <header>
      <div class="wrapper">
        <div class="header_flex">
          <a href="/" class="header_logo">
            <img src={logo} alt="iproject logotype" class="logo_img" />
            <img src={logoMobile} alt="iproject logotype" class="logo_img_mobile" />
          </a>
          <ul class="header_list">
            <li class="header_list_li">
              <p className="header_nav_link header_nav_services" activeClassName="header_nav_active">Услуги</p>
              <ul class="submenu">
                <li class="submenu_li">
                  <Link to="/uslugi/dizajn-interera/" className="submenu_li_a">Дизайн-проект квартиры</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/dizajn-interera-domov/" className="submenu_li_a">Дизайн-проект дома</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/dizajn-interera-ofisov/" className="submenu_li_a">Дизайн-проект офиса</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/arxitekturnoe-proektirovanie/" className="submenu_li_a">Архитектурное проектирование</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/avtorskoe-soprovozhdenie/" className="submenu_li_a">Авторское сопровождение</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/soglasovanie/" className="submenu_li_a">Согласование проекта</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/komplektaciya-obekta/" className="submenu_li_a">Комплектация объекта</Link>
                </li>
                <li class="submenu_li">
                  <Link to="/uslugi/stroitelstvo-i-rekonstrukciya/" className="submenu_li_a">Строительство и&nbsp;ремонт</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/portfolio/" className="header_nav_link" activeClassName="header_nav_active">Портфолио</Link>
            </li>
            <li>
              <Link to="/video/" className="header_nav_link" activeClassName="header_nav_active">Видео</Link>
            </li>
            <li>
              <Link to="/articles/" className="header_nav_link" activeClassName="header_nav_active">Статьи</Link>
            </li>
            <li>
              <Link to="/about/" className="header_nav_link" activeClassName="header_nav_active">О нас</Link>
            </li>
            <li>
              <Link to="/contacts/" className="header_nav_link" activeClassName="header_nav_active">Контакты</Link>
            </li>
          </ul>
          <a href="tel:+375293822550" class="header_phone">+375 29 382 25 50</a>
          <div class="header_burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header



// const Header = ({ siteTitle }) => (
//   <header>
//     <div>
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
