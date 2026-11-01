const joi=require("joi");

module.exports.itemSchema=joi.object({
    name:joi.string().required(),
    image:joi.string().required(),
    title:joi.string().required(),
    price:joi.number().required()

})
module.exports.reviewSchema=joi.object({
    rating:joi.number().required().min(1).max(5),
    comment:joi.string().required()
})