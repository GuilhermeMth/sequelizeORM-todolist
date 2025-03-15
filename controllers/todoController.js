const todo = (req, res, next) => {
    const body = req.body;

    const newTask = {
        id: 1,
        title: body.title,
        status: body.status,
        priority: body.priority,
        description: body.description
    };

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

module.exports = { todo };