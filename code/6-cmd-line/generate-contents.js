const fs= require('fs');
const path = require('path');

const faker = require('faker');

/**
 * @typedef User
 * @param {string} user_id
 * @param {string} first_name
 * @param {string} last_name
 * @param {string} title
 * @param {string} phone
 *
 */

/**
 * @exports
 * @function user
 * @description generates a user object
 *
 * @returns {User}
 */
const user = () => {
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const user_id = first_name.charAt(0) + last_name + faker.random.number();

  return {
    user_id,
    first_name,
    last_name,
    title: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber()
  }
}

/**
 * @typedef Transaction
 * @param {string} user_id
 * @param {string} type
 * @param {string} amount
 *
 */

/**
 * @exports
 * @function transaction
 * @description generates a transaction object
 *
 * @returns {Transaction}
 */
const transaction = (user_ids) => {
  return {
    user_id: faker.random.arrayElement(user_ids),
    type: faker.finance.transactionType(),
    amount: faker.finance.amount(),
  }
}

module.exports = { transaction, user };
