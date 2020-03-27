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
    }
};