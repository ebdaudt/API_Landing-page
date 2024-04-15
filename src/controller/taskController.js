const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    // Recuperando formulario
    const params = Array(
        request.body.title,
        request.body.description
    )

    const query = "INSERT INTO db-tasks(title, description) VALUES(?,?)"
    
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                succes: true,
                mesasge: "Sucesso!",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
            success: false,
            message: "Ops, deu problema!"
            })
        }
    })

}

module.exports = {
    storeTask
}