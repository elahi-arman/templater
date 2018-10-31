const fs = require('fs');
const path = require('path');

const generators = require('./generate-contents');

const DELIMETER = ','
const NUM_USERS = 100;
const NUM_TRANSACTIONS = 500;

const user_to_csv = user => {
    return [user.user_id, user.first_name, user.last_name, user.title, user.phone].join(DELIMETER)
}

const transaction_to_csv = transaction => {
    return [transaction.user_id, transaction.type, transaction.amount].join(DELIMETER);
}

const generate_csv_files = ({directory, users, transactions}) => {
    fs.writeFileSync(path.join(directory, 'users.csv'), users.map(user_to_csv).join('\n'))
    fs.writeFileSync(path.join(directory, 'transactions.csv'), transactions.map(transaction_to_csv).join('\n'))
}

const generate_json_files = ({directory, users, transactions}) => {
    fs.writeFileSync(path.join(directory, 'users.json'), JSON.stringify(users, null, 4))
    fs.writeFileSync(path.join(directory, 'transactions.json'), JSON.stringify(transactions, null, 4))
}


const generate_files = (directory) => {
    const users = []
    const transactions = [];
  
    for (let i = 0; i < NUM_USERS; i++){
      users.push(generators.user());
    }
  
    const user_ids = users.map(user => user.user_id);
  
    for (let i = 0; i < NUM_TRANSACTIONS; i++){
      transactions.push(generators.transaction(user_ids));
    }
  
    generate_csv_files({
        users,
        transactions,
        directory,
    });

    generate_json_files({
        users,
        transactions,
        directory,
    });
}

module.exports = generate_files;