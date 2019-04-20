
exports.getAlive = function (req, res) {
    return res.status(200).send({message: 'API is alive'});
};