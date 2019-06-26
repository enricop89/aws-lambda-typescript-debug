module.exports.hello = async (event: any) => {
  var message: string = "Hello World";
  console.log(message);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event
    })
  };
};
