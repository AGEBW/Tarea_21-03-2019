const status = require('http-status');

let _user;

const getAll = (req, res) => {
    _user.find({})
        .then(user => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: user
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error!!!",
                detail: error
            });
        });
};

const create = (req, res) => {
    const user = req.body;
    console.log(req);
    _user.create(user)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                msg: "Saved!!!",
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo insertar!!!",
                detail: error
            });
        });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
   User.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se eliminó!!!",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se eliminó!!!",
                detail: error
            });
        });
};

const getById = (req, res) => {
    const id = req.params.id;
    User.findOne({ _id: id })
        .then(product => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: user
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
}

const enviar = (req, res) => {
    const id = req.params.id;
    User.findOne({ _id: id })
        .then(product => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: user
            });

            for(i in res){
                console.log( res[i].Email);
                var res=res[i].Email;
            
                //inicio email
                const sgMail = require('@sendgrid/mail');
                sgMail.setApiKey('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');
                 const msg = {
                  to: res,
                  from: 'RoxasRonserot@gmail.com',
                 subject: 'Lo invito a mi fiesta de no Repe...pero igual y me pude haber equivocado D:',
                  text: 'Profesor, este email es de prueba para corroborar que mi aplicacion funciona adecuadamente'
                  };
                 sgMail.send(msg);
                  //fin email
            
                }

        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
}


module.exports = (User) => {
    _user = User;
    return ({
        getAll, create, deleteUser, getById,enviar
    });
}