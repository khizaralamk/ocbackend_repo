// controllers/submitMaintenanceController.js

const submitMaintenanceController = async (req, res) => {
  try {
    const userId = req.params.id;
    const propertyId = req.params.propertyId; // Optional: if you want to associate with a property
    
    // Extract maintenance request data from request body
    const {
      category,
      description,
      preferredDate,
      fromTime,
      toTime,
      images // Array of image URIs/URLs
    } = req.body;

    // Log the received data
    console.log('📝 Maintenance request received:');
    console.log('User ID:', userId);
    console.log('Property ID:', propertyId);
    console.log('Category:', category);
    console.log('Description:', description);
    console.log('Preferred Date:', preferredDate);
    console.log('From Time:', fromTime);
    console.log('To Time:', toTime);
    console.log('Images:', images);

    // Validate required fields
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    if (!category || !description || !preferredDate || !fromTime || !toTime) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided (category, description, preferredDate, fromTime, toTime)'
      });
    }

    // TODO: Save to your database
    // Example structure for what you'd save:
    const maintenanceRequest = {
      id: `mnt-${Date.now()}`, // Generate unique ID
      userId,
      propertyId: propertyId || null,
      category,
      description,
      preferredDate,
      fromTime,
      toTime,
      images: images || [],
      status: 'Pending',
      createdAt: new Date().toISOString(),
      bookingId: `mnt-${Date.now()}-${userId.slice(-3)}` // Example booking ID
    };

    // For now, just log and return success
    // In production, you would:
    // await MaintenanceModel.create(maintenanceRequest);

    return res.status(201).json({
      success: true,
      message: 'Maintenance request submitted successfully',
      data: maintenanceRequest
    });

  } catch (error) {
    console.error('❌ Error in submitMaintenanceController:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = { submitMaintenanceController };