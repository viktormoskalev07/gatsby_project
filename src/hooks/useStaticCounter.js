import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const  useStaticCounter=(field)=>{

  const data = useStaticQuery(graphql`
    {
      pageCounter {
        data
      }
    }
  `)
  if(!field){
    console.error('no slug on page counter')
    return 1;
  }
  const text = data?.pageCounter?.data;
  const obj = JSON.parse(text)
 return obj[field]


}