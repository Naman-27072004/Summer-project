const indexController = (req,res) => {
    res.status(200).send({
        message:"My home page",
        success:true,
    });
};

module.exports = {indexController};