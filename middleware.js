const Review =require("./models/review.js");
module.exports.isLoggedIn =(req,res,next)=>{

    if(!req.isAuthenticated()){
      return  res.status(401).send("you must be logged in first");
    }

    next();
}

module.exports.isReviewAuthor =async (req,res,next)=>{
    const {reviewid} =req.params;
    const review =await Review.findById(reviewid);

    if(!review.author.equals(req.user._id)){
        return res.status(403).send("You are not the author of this review");
    }
    next();
}