const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

module.exports = lowercaseMessage



const transform = (message, transformFunction) => {
    return transformFunction(message);
}

module.exports = transform