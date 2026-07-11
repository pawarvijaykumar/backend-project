

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
// import healthcheckRouter from "./router/healthcheck.router.js"
// import tweetRouter from "./router/tweet.router.js"
// import subscriptionRouter from "./router/subscription.router.js"
// import videoRouter from "./router/video.router.js"
// import commentRouter from "./router/comment.router.js"
// import likeRouter from "./router/like.router.js"
// import playlistRouter from "./router/playlist.router.js"
// import dashboardRouter from "./router/dashboard.router.js"

//routes declaration
// app.use("/api/v1/healthcheck", healthcheckRouter)
// app.use("/api/v1/users", userRouter)
// app.use("/api/v1/tweets", tweetRouter)
// app.use("/api/v1/subscriptions", subscriptionRouter)
// app.use("/api/v1/videos", videoRouter)
// app.use("/api/v1/comments", commentRouter)
// app.use("/api/v1/likes", likeRouter)
// app.use("/api/v1/playlist", playlistRouter)
// app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }