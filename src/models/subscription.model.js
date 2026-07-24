import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

        channel: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

export const Subscription = mongoose.model(
    "Subscription",
    subscriptionSchema
);


/*summery -->subscriber → Who clicked Subscribe?
channel → Whom did they subscribe to?
ObjectId → Stores the user's unique ID.
ref: "User" → Links that ID to the User model.
populate() → Replaces IDs with full user information.
A separate Subscription collection keeps the database organized and scalable. */
