const {dirname,resolve} = require('path')
let rootDir 

class RootHelper{
    static config(){
        rootDir = dirname(resolve('./*'))
        return RootHelper
    }
    static resolveFull(path=''){
        const fullPath = path.replace('~',rootDir)
        return fullPath
    }
}
module.exports = RootHelper