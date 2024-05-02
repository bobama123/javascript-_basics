const notifyByEmail = (emailAddress) => {
    return `Email sent to: ${emailAddress}`;
}

console.log(notifyByEmail('yoyo@test.com'));


const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
}

console.log(notifyByText('00112233445'));

const send = (emailOrNumber, sendFunction) => {
    return sendFunction(emailOrNumber);
}

console.log(send('hello@makers.tech.test', notifyByEmail))
console.log(send('+10000000000', notifyByText))