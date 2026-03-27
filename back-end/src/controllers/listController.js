import mongoose from "mongoose";
import List from "../models/listSchema.js";

 export const createList = async(req, res) => {
try {
    const {title, description} = req.body;
    const creted = await List.create({title, description})
    return res.status(201).json({massage:"list create successfully", data:creted})
} catch (error) {
  return res.status(500).json({massage:"internal server error", error})  
}
};

 export const fatchData = async(req, res) => {
  try {
    const fatchdata = await List.find()
    return res.status(200).json({massage:"list show successfully", data:fatchdata})
  } catch (error) {
     return res.status(500).json({massage:"internal server error", error})  
  }  
};

export const updateData = async(req, res) => {
  try {
    const {id}= req.params;
    const {title, description} = req.body
    const validId = mongoose.Types.ObjectId.isValid(id)
    if (!validId) {
     return res.status(400).json({massage:"id not matching"})   
    }
    const update = await List.findOneAndUpdate({_id:id},{title, description},{new:true})
    if (!update) {
      return res.status(400).json({massage:"list not found"})  
    }
    return res.status(200).json({massage:"list update successfully", data:update})
  } catch (error) {
     return res.status(500).json({massage:"internal server error", error})  
  }  
};

export const deleteData = async(req, res) => {
  try {
    const {id} = req.params;
     const validId = mongoose.Types.ObjectId.isValid(id)
    if (!validId) {
     return res.status(400).json({massage:"id not matching"})   
    }
    const remove = await List.findOneAndDelete({_id:id})
    
    return res.status(200).json({massage:"list deleted successfully", data:remove});

  } catch (error) {
     return res.status(500).json({massage:"internal server error", error})  
  }  
};

export const idCheck = async(req, res) => {
try {
  const {id} = req.params;
  if (!id) {
    return res.status(400).json({massage:"id is missing"})
  }
  const singelData = await List.findById({_id:id})
  return res.status(200).json({massage:"single data fatch successfully", data:singelData})
} catch (error) {
   return res.status(500).json({massage:"internal server error", error})
}
}
