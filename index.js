exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello Lambda, from Github, Again 5!'),
    };
    return response;
};
