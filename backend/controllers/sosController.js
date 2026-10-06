let sosAlerts = [];

const createSOS = (req, res) => {
    const { userId, latitude, longitude, message } = req.body;

    if (!userId || latitude === undefined || longitude === undefined) {
        return res.status(400).json({
            success: false,
            message: "User ID and location are required"
        });
    }

    const newSOS = {
        id: sosAlerts.length + 1,
        userId,
        latitude,
        longitude,
        message: message || "Emergency! I need help.",
        status: "ACTIVE",
        createdAt: new Date().toISOString()
    };

    sosAlerts.push(newSOS);

    res.status(201).json({
        success: true,
        message: "SOS alert created successfully",
        sos: newSOS
    });
};

const getSOSHistory = (req, res) => {
    res.status(200).json({
        success: true,
        alerts: sosAlerts
    });
};

const resolveSOS = (req, res) => {
    const id = parseInt(req.params.id);

    const alert = sosAlerts.find(sos => sos.id === id);

    if (!alert) {
        return res.status(404).json({
            success: false,
            message: "SOS alert not found"
        });
    }

    alert.status = "RESOLVED";

    res.status(200).json({
        success: true,
        message: "SOS alert resolved successfully",
        sos: alert
    });
};

module.exports = {
    createSOS,
    getSOSHistory,
    resolveSOS
};