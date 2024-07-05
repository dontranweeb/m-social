const bcrypt = require('bcrypt')

async function hashPassword(req, res, next) {
    try {
        const { password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10);

        req.body.password = hashedPassword;
        next()
    } catch(err) {
        next(err)
    }
}

module.exports = {
    hashPassword
}