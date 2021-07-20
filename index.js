module.exports.absolute = (number) => {
  return (number >=0)? number: -number;
}

module.exports.greetings = (name) => {
  return `Hello ${name} ! sss`;
}

module.exports.array = () => {
  return ['USA', 'AUD', 'EUR'];
}

module.exports.object = (id) => {
  return {id:id, price:10};
}