const fs = require('fs');
const path = require('path');

const generators = require('./generate-contents');

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
    // use your implementation from 5
}

/**
 * @function transaction_to_csv
 *
 * @param {Transaction} transaction
 * @returns {string} transaction object delimited by comma in the form
 *                      user_id, type, amount
 */
const transaction_to_csv = transaction => {
    // use your implementation from 5
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
    // use your implementation from 5
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
    // use your implementation from 5
}

/**
 * @default @exports
 * @method generate_files
 *
 * @param {string} directory - directory to create files in
 * @param {{json: boolean, csv: boolean}} types - type of files to generate
 */

const generate_files = (directory, types) => {
}

module.exports = generate_files;
