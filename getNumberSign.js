const getNumberSign = (number) => {
    if (number > 0) {
        return 'positive';
    }
    else if (number < 0) {
        return 'negative';
    }
    else {
        return 0;
    }
}

module.exports = getNumberSign;

