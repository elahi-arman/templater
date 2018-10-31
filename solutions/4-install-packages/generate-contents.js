const faker = require('faker');
const delimiter = '|';

const generate_user = () => {
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const user_id = first_name.charAt(0) + last_name + faker.random.number();

  const user_fields = [
    user_id,
    first_name,
    last_name,
    faker.name.jobTitle(),
    faker.phone.phoneNumber()
  ]
  return user_fields.join(delimiter)
}

const generate_transactions = (user_ids) => {
  const transaction_fields = [
    faker.random.arrayElement(user_ids),
    faker.finance.transactionType(),
    faker.finance.amount(),
    faker.finance.currencySymbol(),
  ]
  
  return transaction_fields.join(delimiter);
}

module.exports = { generate_user, generate_transactions };