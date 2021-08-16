const lodash = require('lodash')
const function1 = (str) => {
    return lodash.kebabCase(str) + '   ' + lodash.camelCase(str)
}
module.exports = function1