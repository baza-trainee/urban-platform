interface Routes {
  [key: string]: string
}

const routs: Routes = {
  linkedIn: '/',
  facebook: '/',
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
  createVacancy: '/createVacancy'
}

export default routs
