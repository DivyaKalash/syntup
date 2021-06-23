const Service = require("../models/services");
const slugify = require("slugify");

exports.addService = (req, res)=> {

    const {name, availability, serviceCost, description, category} = req.body;
    let servicePictures = [];

    if(req.files.length > 0){
        servicePictures = req.files.map(file => {
            return {img: file.filename};
        });
    }

    const service = new Service({
        name: name,
        slug: slugify(name),
        availability,
        serviceCost,
        description,
        category,
        createdBy: req.user._id,
        servicePictures
    });

    service.save((error, service)=>{
        if(error){
            res.status(400).json({
                error
            })
        }
        if(service){
            res.status(200).json({
                service
            });
        }
    });

}