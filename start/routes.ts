const UsersController = () => import('#controllers/users_controller')
const GroupsController = () => import('#controllers/groups_controller')

import router from '@adonisjs/core/services/router'

//Users Routes
router.get('users/', [UsersController, 'getAll'])
router.post('users/add', [UsersController, 'create'])

//Groups Routes
router.get('groups/', [GroupsController, 'getAll'])
router.post('groups/add', [GroupsController, 'create'])

//Project Routes
router.get('projetcs/', [GroupsController, 'getAll'])
router.post('projects/add', [GroupsController, 'create'])

//Client Routes
router.get('clients/', [GroupsController, 'getAll'])
router.post('clients/add', [GroupsController, 'create'])
