module.exports = (app) => {
    const controller = require('../controllers/task')

    app.route('/tasks')
        .get(controller.readAllTasks)
        .post(controller.createTask)
        .delete(controller.deleteAllTasks)

    app.route('/tasks/:taskId')
        .get(controller.readTask)
        .put(controller.updateTask)
        .delete(controller.deleteTask)
}