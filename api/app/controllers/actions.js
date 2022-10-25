exports.post = (req, res, next) => {
    res.status(201).send('Sucessfully for requisition!')
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Sucessfully for requisition! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Sucessfully for requisition! ${id}`);
};