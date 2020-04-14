const Task = require('../models/task');


module.exports = {
    async store(request, response) {
        const { description, reponsible } = request.body;
        try {
            let task = await Task.findOne({description});

            if (!task) {
                task = await Task.create({
                    description,
                    reponsible,
                })
            }
            return response.json(task);
        }catch(err) {
            return erro = new Error(err);
        }

    },

    async index(request, response) {
        try {
            const tasks = await Task.find();

            return response.json(tasks);
        }catch(err) {
            return erro = new Error(err);
        }
       
    },

    async delete (req, res) {
        await Task.findOneAndDelete({ _id: req.params.id }, (err, result) => {
            if (result) {
                return res.status(200).send(null);
            } else {
                return res.status(404).send(null);
            }
        })
    }

};