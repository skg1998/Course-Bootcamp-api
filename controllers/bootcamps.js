//@desc     GET all bootcamps
//@routes   GET/api/v1/bootcamps
//@access   public
exports.getAllBootcamps = (req,res,next)=>{
    res.status(200).json({ success:'true',msg:'show all bootcamps'});
};

//@desc     GET one bootcamps
//@routes   GET/api/v1/bootcamps:id
//@access   public
exports.getBootcamps = (req,res,next)=>{
    res.status(200).json({ success:'true',msg:`show bootcamps ${req.params.id}`});
};

//@desc     Create all bootcamps
//@routes   POST/api/v1/bootcamps
//@access   public
exports.createBootcamps =async (req,res,next)=>{
    try{
        const bootcamp = await bootcamp.create(req.body);
        res.status(201).json({
            success:true,
            data:bootcamp
        });
   }catch(err){
        res.status(400).json({
            success:false
        })
   } 
};

//@desc     UPDATE THE bootcamps
//@routes   UPDATE /api/v1/bootcamps:id
//@access   public
exports.updateBootcamps = (req,res,next)=>{
    res.status(200).json({ success:'true',msg:`Update bootcamsps ${req.params.id}`});
};

//@desc     DELETE the bootcamps
//@routes   DELETE /api/v1/bootcamps:id
//@access   public
exports.deleteBootcamps = (req,res,next)=>{
    res.status(200).json({ success:'true',msg:`delete bootcamps ${req.params.id}`});
};