import React from 'react'
import Layout from "../../components/layout"

import mainVideo from "../../video/support.mp4"
import mainVideoMobile from "../../video/support_mob.mp4"

const soglasovanie = () => {
  return (
    <Layout>
      <div class="services_video">
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
          <source src={mainVideo} type="video/mp4" />
        </video>
        <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%">
        </video>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Согласование проекта</h1>
            <p class="services_video_p">Подготовим полный пакет документов и&nbsp;согласуем проект со&nbsp;всеми государственными органами, избавив вас от&nbsp;хлопот и&nbsp;стрессов.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default soglasovanie