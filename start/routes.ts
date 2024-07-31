const UsersController = () => import('#controllers/users_controller')
const GroupsController = () => import('#controllers/groups_controller')
const ClientsController = () => import('#controllers/clients_controller')
const ProjectsController = () => import('#controllers/projects_controller')
const AuthController = () => import('#controllers/auth_controller')

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

//Project Routes
router.get('projects/', [ProjectsController, 'getAll'])
router.post('projects/add', [ProjectsController, 'create'])

//Client Routes
router.get('clients/', [ClientsController, 'getAll'])
router.post('clients/add', [ClientsController, 'create'])
