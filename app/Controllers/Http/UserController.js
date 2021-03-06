'use strict'
const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single user.
   * GET users/:id
   */
  async show ({ params, request, response, view }) {
    const user = await User.find(params.id)
    const {username,email} = user.toJSON()
    const profile =await users
       .profile()
       .select('github')
       .fetch()

       return {
          username,
          email,
          profile:profile.toJSON()
       }
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
