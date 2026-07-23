const aggregate = Comment.aggregate([
    {
        $match: {
            video: new mongoose.Types.ObjectId(videoId)
        }
    },
    {
        $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "owner"
        }
    },
    {
        $unwind: "$owner"
    },
    {
        $project: {
            content: 1,
            createdAt: 1,
            "owner.username": 1,
            "owner.avatar": 1
        }
    }
])

const options = {
    page: Number(page),
    limit: Number(limit)
}

const comments = await Comment.aggregatePaginate(aggregate, options)

return res.status(200).json(
    new ApiResponse(200, comments, "Comments fetched successfully")
)