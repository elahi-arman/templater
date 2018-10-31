const fs= require('fs');
const path = require('path');

const faker = require('faker');

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

const transaction = (user_ids) => {
  return {
    user_id: faker.random.arrayElement(user_ids),
    type: faker.finance.transactionType(),
    amount: faker.finance.amount(),
  }
}

module.exports = { transaction, user };