const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name cannot be more than 50 charecter']
    },
    slug:String,
    description:{
        type:String,
        required:[true,'Please add a description'],
        unique:true,
        trim:true,
        maxlength:[500,'description cannot be more than 500 charecter']
   
    },
    website:{
        type:String,
        match:[
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please add a valid url with HTTP or HTTPs'
        ]
    },
    phone:{
        type:Number,
        maxlength:[20,'Phone number cannot be grater than 20 characters']
    },
    email:{
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email'
        ]
    },
    address:{
        type:String,
        required:[true,'Please add an address']
    },
    location:{
        //GeoJson Point
        type :{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true,
            index:'2dsphere'
        },
        formattedAddress:String,
        street:String,
        city:String,
        zipcode:String,
        country:String
    },
    careers:{
        //Arrays of strings
        type:[String],
        require:true,
        enum:[
            'Web Development',
            'Mobile Development',
            'UI/Ux',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type:Number,
        min:[1,'Rating must be at least 1'],
        max:[10, 'Rating must can be not more than 10']
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    housing:{
        type:Boolean,
        default:false
    },
    jobAssistance:{
        type:Boolean,
        default:false
    },
    jobGuarantee:{
        type:Boolean,
        default:false,
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Bootcamps',BootcampSchema);