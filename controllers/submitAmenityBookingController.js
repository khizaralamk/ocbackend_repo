// controllers/submitAmenityBookingController.js

const submitAmenityBookingController = async (req, res) => {
  try {
    const userId = req.params.id;
    const propertyId = req.params.propertyId; // Optional: if you want to associate with a property
    
    // Extract amenity booking data from request body
    const {
      amenity,
      date,
      timeSlot
    } = req.body;

    // Log the received data
    console.log('📝 Amenity booking request received:');
    console.log('User ID:', userId);
    console.log('Property ID:', propertyId);
    console.log('Amenity:', amenity);
    console.log('Booking Date:', date);
    console.log('Time Slot:', timeSlot);

    // Validate required fields
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    if (!amenity || !date || !timeSlot) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided (amenity, date, timeSlot)'
      });
    }

    // TODO: Save to your database
    // Example structure for what you'd save:
    const amenityBooking = {
      id: `amn-${Date.now()}`, // Generate unique ID
      userId,
      propertyId: propertyId || null,
      amenity,
      date,
      timeSlot,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      bookingId: `amn-${Date.now()}-${userId.slice(-3)}` // Example booking ID
    };

    // For now, just log and return success
    // In production, you would:
    // await AmenityBookingModel.create(amenityBooking);

    return res.status(201).json({
      success: true,
      message: 'Amenity booking submitted successfully',
      data: amenityBooking
    });

  } catch (error) {
    console.error('❌ Error in submitAmenityBookingController:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = { submitAmenityBookingController };

