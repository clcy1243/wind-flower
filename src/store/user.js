import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const user = new EventEmitter()

export default user

/**
 * login
 * @param  {Object}  user [description]
 * @return {boolean}      [description]
 */
user.login = user => {
    if (user.username && user.password) {
        return true
    } else {
        return false
    }
}