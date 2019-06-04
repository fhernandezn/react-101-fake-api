const express = require('express');
const {Router} = express;

const uuidv1 = require('uuid/v1');

let items = [{
    id: uuidv1(),
    content: 'first item'
}];

module.exports = () => {
    const router = Router();

    router.route('/items')
        .get((req, res) => {
            res.send({items});
        })
        .post((req, res) => {
            const {content} = req.body;
            const newItem = {
                id: uuidv1(),
                content
            };

            items.push(newItem);
            res.send({item: newItem});
        });

    router.route('/items/:id')
        .get((req, res) => {
            const {id} = req.params;

            const found = items.find(i => i.id == id);

            if (!found) {
                return res.sendStatus(404);
            }

            return res.send({item: found});
        })
        .delete((req, res) => {
            const {id} = req.params;

            items = items.filter(i => i.id != id);

            return res.sendStatus(200);
        });


    return router;
};
