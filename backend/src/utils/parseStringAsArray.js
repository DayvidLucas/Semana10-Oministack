module.exports = function parStringAsArray(string){
    return  string.split(',').map(tech => tech.trim())
}