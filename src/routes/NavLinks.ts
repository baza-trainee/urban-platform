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
  donation: '/donation',
  donationThanks: '/support',
  createGrant: '/createGrant',
  editGrant: '/editGrant/:id',
  organizationPage: '/org/:id'
}

export default routs
