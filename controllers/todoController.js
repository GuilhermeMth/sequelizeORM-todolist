const todo = (req, res, next) => {
    res.json({
        status: "success",
        message: "todo route are working"
    })
    
};

module.exports = {
    todo
};