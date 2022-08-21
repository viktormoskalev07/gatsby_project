import React from 'react'
import Layout from "../components/layout-black"
import Seo from "../components/seo"
import { VideoButton } from "../subitems/pagevideo/videobutton"

const video = () => {
  return (
    <Layout>
      <Seo  title={"Видео материалы и презентации | I-PROJECT"} description={"На странице собраны видео наших реализованных проектов: квартир, домов и офисов. На видео можно увидеть процесс реализации или презентацию объекта."}
            location={"https://i-project.by/video"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <VideoButton />
    </Layout>
  )
}

export default video