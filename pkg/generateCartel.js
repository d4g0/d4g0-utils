const os = require('os')
/**
 * Returns an cartel for an http listening app.
 * The expected configs is composed with an:
 * * `port`
 * * `appName`
 * @param {object} config 
 */
const getCartel = ({
    port = "0000",
    appName = 'defaultApp',
    emojiLeft = "",
    emojiRight = ""
}) => {

    const netaddres = os.networkInterfaces().wlo1 ?
        os.networkInterfaces().wlo1[0].address
        :
        "localhost"
    const addressStr = os.networkInterfaces().wlo1 ?
        `http://${netaddres}:${port}    `
        :
        `http://${netaddres}:${port}    `

    const cartel = `\n
            ╔══════════════════════════════════════════════╗
            ║                                              ║
            ║  ${emojiLeft ? emojiLeft : '📽️'} ${appName}  ${emojiLeft ? emojiLeft : '📽️'}                            ║
            ║                                              ║
            ║  Listening at ${addressStr}      ║
            ║                                              ║ 
            ╚══════════════════════════════════════════════╝\n`
    return cartel
}

module.exports = getCartel