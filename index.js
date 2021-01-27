exports.handler = async (event) => {
    // const name = event['name'];
    
    const body = JSON.parse(event.body)
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello, heyy ${body.name}!`)
    };
    
    return response;
};