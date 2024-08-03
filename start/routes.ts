const UsersController = () => import('#controllers/users_controller')
const GroupsController = () => import('#controllers/groups_controller')
const ClientsController = () => import('#controllers/clients_controller')
const ProjectsController = () => import('#controllers/projects_controller')
const AuthController = () => import('#controllers/auth_controller')
const RequestsController = () => import('#controllers/requests_controller')

import router from '@adonisjs/core/services/router'

//Auth Routes
router.post('auth/login/', [AuthController, 'login'])
router.post('auth/logout/', [AuthController, 'logout'])

//Users Routes
router.get('users/', [UsersController, 'getAll'])
router.post('users/add', [UsersController, 'create'])

//Groups Routes
router.get('groups/', [GroupsController, 'getAll'])
router.post('groups/add', [GroupsController, 'create'])
router.delete('groups/delete', [GroupsController, 'deleteById'])

//Project Routes
router.get('projects/', [ProjectsController, 'getAll'])
router.post('projects/add', [ProjectsController, 'create'])
router.delete('projects/delete', [ProjectsController, 'deleteById'])

//Client Routes
router.get('clients/', [ClientsController, 'getAll'])
router.post('clients/add', [ClientsController, 'create'])
router.delete('clients/add', [ClientsController, 'deleteById'])

//Request Routes
router.get('requests/', [RequestsController, 'getAll'])
router.post('requests/add', [RequestsController, 'create'])
router.delete('requests/delete', [RequestsController, 'deleteById'])
