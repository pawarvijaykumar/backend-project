import mongoose,{Schema} from "mangoose"
const subscriptionSchema=new Schemaa({
  subscriber:{
    type:Schema.Tyeps.ObjectId,//whob is the subscriber
    ref:"User"
  },

   channel:{
    type:Schema.Tyeps.ObjectId,//whob is the watch ur channel or subscriber ur channel
    ref:"User"
  }


})
