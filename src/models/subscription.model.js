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


/*summery -->subscriber → Who clicked Subscribe?
channel → Whom did they subscribe to?
ObjectId → Stores the user's unique ID.
ref: "User" → Links that ID to the User model.
populate() → Replaces IDs with full user information.
A separate Subscription collection keeps the database organized and scalable. */
