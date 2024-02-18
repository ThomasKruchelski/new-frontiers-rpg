import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

import logo from "public/logo.png"

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – New Frontiers'
    }
  },
  logo: <Image src={logo} alt="New Frontiers" width={350}/>,
  // chat: {
  //   link: 'https://discord.com',
  // },
  search: {
    placeholder: 'Faça sua busca...',
  },
  toc: {
    backToTop: true,
    
  },
  editLink:{
    text:"Quero editar essa página"
  },
  feedback:{
    useLink: () => "mailto:thomas.lima.kru@gmail.com?subject=Feedback - New Frontiers RPG",
    content: "O que está achando do nosso RPG?"
  },
  footer: {
    text: 'New Frontiers RPG - made by Thomas',
  },
  faviconGlyph: "🌌",
  
}

export default config
