let locations = [];

const saveLocation = (req, res) => {
    const { userId, latitude, longitude } = req.body;

    if (!userId || latitude === undefined || longitude === undefined) {
        return res.status(400).json({
            success: false,
            message: "User ID, latitude and longitude are required"
        });
    }

    const existingLocation = locations.find(
        location => location.userId === Number(userId)
    );

    if (existingLocation) {
        existingLocation.latitude = latitude;
        existingLocation.longitude = longitude;
        existingLocation.updatedAt = new Date().toISOString();

        return res.status(200).json({
            success: true,
            message: "Location updated successfully",
            location: existingLocation
        });
    }

    const newLocation = {
        id: locations.length + 1,
        userId: Number(userId),
        latitude,
        longitude,
        updatedAt: new Date().toISOString()
    };

    locations.push(newLocation);

    res.status(201).json({
        success: true,
        message: "Location saved successfully",
        location: newLocation
    });
};

const getLocation = (req, res) => {
    const userId = Number(req.params.userId);

    const location = locations.find(
        location => location.userId === userId
    );

    if (!location) {
        return res.status(404).json({
            success: false,
            message: "Location not found"
        });
    }

    res.status(200).json({
        success: true,
        location
    });
};

module.exports = {
    saveLocation,
    getLocation
};