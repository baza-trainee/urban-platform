export interface INavLink {
  name: string
  to: string
}

export const navLinks: INavLink[] = [
  {
    name: 'Про платформу',
    to: '/about'
  },
  {
    name: 'Як це працює?',
    to: '/howitWorks'
  }
]
