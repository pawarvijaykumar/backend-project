const getChannelStats = asyncHandler(async (req, res) => {

    const channelId = req.user._id;

    const stats = await Video.aggregate([
        {
            $match: {
                owner: new mongoose.Types.ObjectId(channelId)
            }
        },
        {
            $lookup: {
                from: "likes",
                localField: "_id",
                foreignField: "video",
                as: "likes"
            }
        },
        {
            $group: {
                _id: "$owner",
                totalVideos: { $sum: 1 },
                totalViews: { $sum: "$views" },
                totalLikes: { $sum: { $size: "$likes" } }
            }
        }
    ]);

    return res.status(200).json(
        new ApiResponse(200, stats, "Channel stats fetched successfully")
    );
});