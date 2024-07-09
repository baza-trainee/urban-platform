interface Routes {
  [key: string]: string
}

const routs: Routes = {
  linkedIn: '/',
  facebook: '/',
  phone: 'tel:380960165907',
  email: 'mailto:active.people.city@gmail.com',
  baza: 'https://baza-trainee.tech/ua',
  privacyPolicy: '/pdf/privacy-policy.pdf',
  termsOfSite: '',
  home: '/',
  projects: '/projects',
  members: '/parties',
  organizations: '/publicOrgs',
  grants: '/grants',
  vacancies: '/vacancies',
  messages: '/messages',
  userProfile: '/profile',
  createProject: '/createProject',
  createGrant: '/createGrant',
  registration: '/registration',
  login: '/login',
  donation: '/donation',
  donationThanks: '/support',
  editGrant: '/editGrant/:id',
  organizationPage: '/org/:id',
  checkVacancy: '/vacancy/:id',
  volunteerProfileEdit: '/volunteerProfile/edit/:id',
  editVacancy: '/editVacancy/:id',
  editProject: '/editProject/:id',
  volunteerProfile: '/volunteerProfile/:id',
  orgProfileEdit: '/orgProfile/edit/:id',
  createVacancy: '/createVacancy',
  volunteerPage: '/volunteer/:id',
  orgPage: '/org/:id',
  howItWoks: '/howitworks',
  about: '/about',
  contacts: '/contacts'
}

export default routs
