import React from 'react'
import Layout from "../components/layout-black"
import { Link } from "gatsby"
import youtubeIcon from "../images/contacts_youtube.svg"
import instagramIcon from "../images/contacts_instagram.svg"
import facebookIcon from "../images/contacts_facebook.svg"
import Seo from "../components/seo"
import { AnimatedLine } from '../subitems/portfolio/animatedLine'

const Contacts = () => {
  return (
    <Layout>
      <Seo  title={"Контакты cтудии дизайна и архитектуры | I-PROJECT"} description={"Работаем в Минске по адресу ✦ Минск, пр-т Машерова 9 ✦ с понедельника по пятницу с 9 до 18 ✦ Встречи предварительно согласовываются"}
            location={"https://i-project.by/about"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div class="wrapper">
        <h1 class="contacts_title">Контакты</h1>
        <div class="contacts">
          <div class="contacts_full_flex">
            <AnimatedLine />
            <div class="contacts_flex">
              <p class="contacts_appeal"><span>Уважаемые клиенты!</span><br/> Вы&nbsp;можете запланировать встречу и&nbsp;получить консультацию по&nbsp;всем вопросам дизайна интерьера или строительства вашего дома.</p>
              <div class="contacts_info">
                <div class="contacts_info_item">
                  <p class="contacts_info_p">Телефон:</p>
                  <a href="tel:+375293822550" class="contacts_info_tel">+375 (29) 382 25 50</a>
                </div>
                <div class="contacts_info_item">
                  <p class="contacts_info_p">Эл. почта:</p>
                  <a href="mailto:info@i-project.by" class="contacts_info_email">info@i-project.by</a>
                </div>
                <div class="contacts_info_item contacts_info_item_hide">
                  <p class="contacts_info_p">Адрес:</p>
                  <p class="contacts_info_p">проспект Машерова 9, г. Минск, 220029</p>
                </div>
              </div>
            </div>
            <div class="contacts_flex_second">
              <div class="contacts_hours">
                <p class="contacts_hours_item">Работаем с&nbsp;понедельника по&nbsp;пятницу с&nbsp;10&nbsp;до&nbsp;19</p>
                <p class="contacts_hours_item">В&nbsp;работу берем объекты размером от&nbsp;100&nbsp;м<sup>2</sup></p>
              </div>
              <p class="contacts_address">Студия дизайна и&nbsp;архитектуры<br/>i-project, проспект Машерова&nbsp;9, г.&nbsp;Минск, 220029</p>
            </div>
          </div>
          <div class="contacts_social">
            <Link to="https://www.youtube.com/channel/UC9Vf2sr4dwdBLDw80XjAdLA" class="contacts_social_item">
              <img src={youtubeIcon} alt="youtube icon" class="contacts_social_youtube_icon" />
              <p class="contacts_social_text">Youtube</p>
            </Link>
            <Link to="https://www.instagram.com/iproject.studio" class="contacts_social_item">
              <img src={instagramIcon} alt="instagram icon" class="contacts_social_insta_icon" />
              <p class="contacts_social_text">Instagram</p>
            </Link>
            <Link to="https://www.facebook.com/iproject.by" class="contacts_social_item">
              <img src={facebookIcon} alt="facebook icon" class="contacts_social_facebook_icon" />
              <p class="contacts_social_text">Facebook</p>
            </Link>
          </div>
        </div>
        <iframe class="contacts_map" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1353560522" width="100%" height="100%" frameborder="0" title="Yandex map"></iframe>
        
      </div>
      
    </Layout>
  )
}

export default Contacts