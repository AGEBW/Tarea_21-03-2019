const userRouter = require('express').Router();

module.exports = (wagner) => {

    const userCtrl = wagner.invoke((User)=>
        require('../controllers/user.controller')(User));    

    userRouter.post("/", (req, res) => {
        productCtrl.create(req, res);
    });

    userRouter.get("/", (req, res) => {
        productCtrl.getAll(req,res);
    });

    userRouter.get("/:id", (req, res) => {
        productCtrl.getById(req, res);
    });

    userRouter.delete("/:id", (req, res) => {
        productCtrl.deleteProduct(req, res);
    });

    return userRouter;
}