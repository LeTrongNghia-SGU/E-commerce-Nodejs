const {default: mongoose, Error} = require('mongoose')

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        if(conn.connection.readyState === 1) console.log('DB Connection is successfuly ')
        else console.log('Db Connection is failed')
    } catch (error) {
        console.log('Db Connection is failed')
    }
}

module.exports = dbConnect