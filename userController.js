import user from "./user.js"


const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        const existUser = await user.findOne({ email });

        if (existUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const newUser = new user({
            email,
            password
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully"
        });

    } catch (e) {
        res.status(500).json({
            message: "Error creating user",
            error: e.message
        });
    }

};



const getUser=async (req,res)=>{
    try{
        const users=await user.find();
        res.status(200).json(users);

    }catch(e){
        res.status(500).json({message:"Error feching user",error:e.message});
    }
};
export {createUser,getUser};