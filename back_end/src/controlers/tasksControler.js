const Task = require('../models/task');

module.exports = {
    async store(request, response) {
        const { description, reponsible } = request.body;
    
        let task = await Task.findOne({description});

        if (!task) {
            task = await Task.create({
                description,
                reponsible,
            })
        }
        return response.json(task);
    },

    async index(request, response) {
        const tasks = await Task.find();

        return response.json(tasks)
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