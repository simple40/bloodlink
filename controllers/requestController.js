const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Request = require("../models/bloodRequestModel");
const User = require("../models/userModel");


const createRequest = asyncHandler(async (req,res)=>{
    const { bloodType, location } = req.body;
    if (!bloodType || !location ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
      }
    
    const request =await Request.create({
        userID : req.user.id,
        bloodType,
        location,
        status: "Open",
    });
    if(request){
        res.status(201).json({request});
    }
    else{
        res.status(400);
        throw new Error("data not valid");
    }    

    console.log(request);
    res.json({message: "request created successfully"});
});

const acceptRequest = asyncHandler(async(req,res)=>{
    const {requestID} = req.body;
    if(!requestID){
        res.status(400);
        throw new Error("No requests selected");
    }
    const request =await Request.findById(requestID);
    if(!request){
        res.status(400);
        throw new Error("NO requests");
    }
        // Request.updateOne({_id: requestID},
        // {donorUserID : req.user.id},(err,res)=>{
        //     if(err){
        //         res.status(400).send(err);
        //     }
        //     else{
        //         res.json(res);
        //     }
        // });

        const updatedContact = await Request.findByIdAndUpdate(
            requestID,
            {donorUserID : req.user.id},
            { new: true }
          );
        
    // request.donorUserID = req.user.id;
    // await Request.save();
    res.status(201).json({request});
    
});

const getAllRequests = asyncHandler(async(req,res)=>{
    const requests = await Request.find({userID : req.user.id});
    res.status(201).json(requests);
});

// const updateRequest = asyncHandler(async(req,res)=>{

// })

module.exports = {createRequest,acceptRequest,getAllRequests};