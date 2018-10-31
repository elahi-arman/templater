// require necessary libraries
// make sure to require the local file generate-contents

const DELIMETER = ','
const NUM_USERS = 100;
const NUM_TRANSACTIONS = 500;

/**
 * @function user_to_csv
 *
 * @param {User} user
 * @returns {string} user object delimited by comma in the form
 *                      user_id, first_name, last_name, title, phone
 */
const user_to_csv = user => {
}

/**
 * @function transaction_to_csv
 *
 * @param {Transaction} transaction
 * @returns {string} transaction object delimited by comma in the form
 *                      user_id, type, amount
 */
const transaction_to_csv = transaction => {
}

/**
 * @method generate_csv_files
 *
 * @param {object} param
 * @param {string} param.directory - directory to create files in
 * @param {User[]} param.users
 * @param {Transaction[]} param.transactions
 *
 */

const generate_csv_files = ({directory, users, transactions}) => {

}

/**
 * @method generate_json_files
 *
 * @param {object} param
 * @param {string} param.directory - directory to create files in
 * @param {User[]} param.users
 * @param {Transaction[]} param.transactions
 *
 * NOTE: although javascript doesn't have the concept of named parameters, by passing an
 * object as a parameter, we can effectively add names to parameters
 */
const generate_json_files = ({directory, users, transactions}) => {

}

/**
 * @default @exports
 * @method generate_files
 *
 * @param {string} directory - directory to create files in
 */

const generate_files = directory => {}

// make generate_files the default (and only) export of this file
module.exports = generate_files;
