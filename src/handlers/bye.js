
module.exports.handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda Second heandler function!'),
    };
    return response;
  };