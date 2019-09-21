import { UsersController } from "../app/controllers/usersController";

export const Routes = [
  {
    method: 'get',
    route: '/users',
    controller: UsersController,
    action: 'index',
  },
  {
    method: 'get',
    route: '/users/:id',
    controller: UsersController,
    action: 'show',
  },
  {
    method: 'post',
    route: '/users',
    controller: UsersController,
    action: 'create',
  },
  {
    method: 'put',
    route: '/users/:id',
    controller: UsersController,
    action: 'update',
  },
  {
    method: 'delete',
    route: '/users/:id',
    controller: UsersController,
    action: 'destroy',
  },
]

