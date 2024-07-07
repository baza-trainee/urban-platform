import routs from '../../../../routes/NavLinks'

export interface INavLink {
  name: string
  to: string
}

export const navLinks: INavLink[] = [
  {
    name: 'Про платформу',
    to: routs.about
  },
  {
    name: 'Як це працює?',
    to: routs.howItWorks
  }
]
