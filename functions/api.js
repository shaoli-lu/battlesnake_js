exports.handler = async (event) => {
  // Handle the request here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from API!' }),
  };
};