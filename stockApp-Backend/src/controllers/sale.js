"use strict";

const Sale = require("../models/sale");

module.exports ={
  list: async (req, res) => {
      /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    const data = await res.getModelList(Sale);

    res.status(200).send(data);
  },
  create: async (req, res) => {
     /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Sale' }
            }
        */
 
    const data = await Sale.create(req.body);

    res.status(200).send(data);
  },
  read: async (req, res) => {
     /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */
  
    const data = await Sale.findOne({_id: req.params.id});

    res.status(200).send(data);
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Sale' }
            }
        */
    
    const data = await Sale.updateOne({_id: req.params.id}, req.body)

    res.status(202).send({
      data,
      new: await Sale.findOne({_id: req.params.id}),
    })
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */
  

    const data = await Sale.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
        error: !data.deletedCount,
        data
    });
  },
};
                       