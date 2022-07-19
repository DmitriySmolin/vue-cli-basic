export const process = {
  dev: true
}

export const site = {
  home: process.dev ? 'https://localhost:8080/' : 'https://tocode.ru'
}

export const app = {
  title: 'Template'
}

export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about'
  }
  // {
  //   title: 'Vacancy',
  //   alias: 'vacancy',
  //   url: '/vacancy',
  // },
]
