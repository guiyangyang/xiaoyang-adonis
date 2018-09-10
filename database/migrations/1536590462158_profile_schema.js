'use strict'

const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string('github')//添加字段
      table.integer('user_id').unsigned()//整数 正数
      table.foreign('user_id').references('users.id')// 外联  关联
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
