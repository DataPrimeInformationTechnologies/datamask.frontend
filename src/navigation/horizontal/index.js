const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline',
  },
  {
    title: 'Configuration',
    path: '/second-page',
    icon: 'mdi:email-outline',
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Rules',
    icon: 'mdi:shield-outline',
  }
]

export default navigation
