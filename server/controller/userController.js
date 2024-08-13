import User from "../model/userModel.js";


export const create = async(req,res)=>{
    try{
        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg:"User Data not found"});
        }

        const savedData = await userData.save();
        res.status(200).json({savedData , msg: "user created successfully"})
    }
    catch(error){
        console.log(error);
    }
}

export const getAll = async(req,res)=>{
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"Users Data not found"});
        }
        res.status(200).json(userData);
    }
    catch(error){
        console.log(error);
    }
}


export const getOne = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
       
        if(!userExist){
            return res.status(404).json({msg:"User not found"});
        }
        res.status(200).json(userExist);
    }
    catch(error){
        console.log(error);
    }
}
export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
       
        if(!userExist){
            return res.status(404).json({msg:"User not found"});
        }
        const updatedData  = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({updatedData , msg:"User Updated Successfully"});
    }
    catch(error){
        console.log(error);
    }
}
export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
       
        if(!userExist){
            return res.status(404).json({msg:"User not found"});
        }
        const user  = await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted successfully"});
    }
    catch(error){
        console.log(error);
    }
}