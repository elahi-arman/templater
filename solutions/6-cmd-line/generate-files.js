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
 * @method generate_csv_files
 *
 * @param {object} param
 * @param {string} param.directory - directory to create files in
 * @param {User[]} param.users
 * @param {Transaction[]} param.transactions
 *
 */

const generate_csv_files = ({directory, users, transactions}) => {
    fs.writeFileSync(path.join(directory, 'users.csv'), users.map(user_to_csv).join('\n'))
    fs.writeFileSync(path.join(directory, 'transactions.csv'), transactions.map(transaction_to_csv).join('\n'))
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
    fs.writeFileSync(path.join(directory, 'users.json'), JSON.stringify(users, null, 4))
    fs.writeFileSync(path.join(directory, 'transactions.json'), JSON.stringify(transactions, null, 4))
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

    for(let i = 0; i < NUM_USERS; i++) {
        users.push(generators.user());
    }

    const user_ids = users.map(user => user.user_id);

    for(let i = 0; i < NUM_TRANSACTIONS; i++) {
        transactions.push(generators.transaction(user_ids));
    }

    if (types.csv){
        generate_csv_files({
            users,
            transactions,
            directory,
        });
    }

    if (types.json){
        generate_json_files({
            users,
            transactions,
            directory,
        });
    }

}

module.exports = generate_files;
