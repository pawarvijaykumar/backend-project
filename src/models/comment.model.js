import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";//it help the  suppose u have 10000  comments
//instead of sending all comments

//like 1 to 1000
//then u d=send only 10 at time
//theat wis e the this use the -->"mongoose-aggregate-paginate"


const commentSchema=new Schema(
    {
        content:{//"Nice Video!"
            type:String,
            required:true
        },
        video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)


commentSchema.plugin(mongooseAggregatePaginate)

export const Comment=mongoose.model("Comment",commentSchema)