exports.handler = async (event) => {
  // const name = event['name'];

  const body = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hola! ${body.name}!`),
  };

  return response;
};
