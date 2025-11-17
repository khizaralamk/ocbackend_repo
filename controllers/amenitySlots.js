const AMENITY_LISTING = [
    { 
      id: '1', 
      title: 'Gym', 
      timeslots: [
        { time: '10:00 AM - 10:30 AM', isBooked: false },
        { time: '10:30 AM - 11:00 AM', isBooked: true },
        { time: '11:00 AM - 11:30 AM', isBooked: false },
        { time: '11:30 AM - 12:00 PM', isBooked: true },
        { time: '12:00 PM - 12:30 PM', isBooked: false },
        { time: '12:30 PM - 01:00 PM', isBooked: false },
      ]
    },
    { 
      id: '2', 
      title: 'Cinema', 
      timeslots: [
        { time: '10:00 AM - 10:30 AM', isBooked: false },
        { time: '10:30 AM - 11:00 AM', isBooked: false },
        { time: '11:00 AM - 11:30 AM', isBooked: true },
        { time: '11:30 AM - 12:00 PM', isBooked: false },
        { time: '12:00 PM - 12:30 PM', isBooked: true },
        { time: '12:30 PM - 01:00 PM', isBooked: false },
      ]
    },
  ]
  
  const fetchAmenityListing = async (req, res) => {
    return res.json({ success: true, data: AMENITY_LISTING });
  }

  module.exports = { fetchAmenityListing };