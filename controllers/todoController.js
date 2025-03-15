const task = require('../db/models/task');

const todo = (req, res, next) => {
    const body = req.body;

    const newTask = task.create({
        title: body.title,
        status: body.status,
        priority: body.priority,
        description: body.description,
    });

    if (!newTask) {
        return res.status(400).json({
            status: "error",
            message: "Task not created"
        });
    }

    return res.status(201).json({
        status: "success",
        message: "Task created",
        data: newTask
    });
};

const readAll = async (req, res, next) => {
    try {
        const tasks = await task.findAll();
        return res.status(200).json({
            status: "success",
            data: tasks
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Failed to retrieve tasks"
        });
    }
};

const readOne = async (req, res, next) => {
    const id = req.params.id;

    try {
        const specificTask = await task.findByPk(id);
        if (!specificTask) {
            return res.status(404).json({
                status: "error",
                message: "Task not found"
            });
        }
        return res.status(200).json({
            status: "success",
            data: specificTask
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Failed to retrieve the task"
        });
    }
};

const updateTask = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const [updatedRows] = await task.update(body, {
            where: { id }
        });

        if (updatedRows === 0) {
            return res.status(404).json({
                status: "error",
                message: "Task not found"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Task updated"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Failed to update the task"
        });
    }
};

const deleteTask = async (req, res, next) => {
    const id = req.params.id;

    try {
        const deletedRows = await task.destroy({
            where: { id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({
                status: "error",
                message: "Task not found"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Task deleted"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Failed to delete the task"
        });
    }
};

module.exports = { todo, readAll, readOne, updateTask, deleteTask };
