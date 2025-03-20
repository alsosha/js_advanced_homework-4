function healthChecker(statusInfo) {
    let result = '';
    if (statusInfo.health > 50) {
        result = 'healthy';
    } else if (statusInfo.health < 15) {
        result = 'critical';
    } else {
        result = 'wounded';
    }

    return result;
}


function healthSorter(statusArray) {
    const sortedStatusArray = [...statusArray];
    return sortedStatusArray.sort((a, b) => b.health - a.health);
}

module.exports = {
    healthChecker,
    healthSorter
}