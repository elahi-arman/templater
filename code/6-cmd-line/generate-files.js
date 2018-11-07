const fs = require('fs');
const path = require('path');
// const {promisify} = require('util');    // if you want to convert callback based code to promise based

const generators = require('./generate-contents');


const _writeFile = promisify(fs.writeFile);

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
    return [user.user_id, user.first_name, user.last_name, user.title, user.phone].join(DELIMETER)
}

/**
 * @function transaction_to_csv
 *
 * @param {Transaction} transaction
 * @returns {string} transaction object delimited by comma in the form
 *                      user_id, type, amount
 */
const transaction_to_csv = transaction => {
    return [transaction.user_id, transaction.type, transaction.amount].join(DELIMETER);
}

/**
  * @method generate_files_of_type
  *
  * @param {string} extension - the extension to apply to the file
  * @param {function} convert_transaction - convert a transaction object to the given file type
  * @param {function} convert_user - convert a user object to the given file type
  *
  * @returns {function({directory, users, transactions}) -> Promise} a function that returns a promsie
  *                       that resolves once the users and transactions are written to the given directory
  *
  */
const generate_files_of_type = ({extension, convert_transaction, convert_user}) => ({directory, users, transactions}) => {
  // use the fs.writeFile function to write out the actual files with the given parameters
  // the callback should check for errors on a write, and if there are none, it should log a message that writing that file is finished
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

const generate_csv_files = (params) => {
    const csv_params = {
      extension: 'csv',
      convert_transaction: (transaction) => console.log("🐱""); 
      convert_user: (user) => console.log("🦄'");
    }

    return generate_files_of_type(csv_params)(params)
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
const generate_json_files = (params) => {
    const json_params = {
      extension: 'json',
      convert_transaction: (transaction) => console.log('🐵'')
      convert_user: (user) => console.log('🐶'')
    }

    return generate_files_of_type(json_params)(params)
}

/**
 * @default @exports
 * @method generate_files
 *
 * @param {string} directory - directory to create files in
 * @param {{json: boolean, csv: boolean}} types - type of files to generate
 */

const generate_files = (directory, types) => {
    const users = []
    const transactions = [];
    const promises = [];

    for(let i = 0; i < NUM_USERS; i++) {
        users.push(generators.user());
    }

    const user_ids = users.map(user => user.user_id);

    for(let i = 0; i < NUM_TRANSACTIONS; i++) {
        transactions.push(generators.transaction(user_ids));
    }

    if (types.csv){
        promises.push(generate_csv_files({
            users,
            transactions,
            directory,
        }));
    }

    if (types.json){
        promises.push(generate_json_files({
            users,
            transactions,
            directory,
        }));
    }

    return Promise.all(promises);

}

module.exports = generate_files;
