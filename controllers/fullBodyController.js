const fullBodyArray = [
  {
    "user": {
      "id": "user_001",
      "email": "khizar@gmail.com",
      "password": "khizar123",
      "name": "Khizar Alam",
      "phone": "+1-555-0123",
      "avatarUrl": "https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto/v1753558038/samples/animals/cat.jpg",
       "termsAccepted": true,
      cards:[
        {
          cardId: "card_001",
          cardType: "Visa",
          cardNumber: "**** **** **** 1234",
          expiryDate: "12/25",
          cardHolderName: "Khizar Alam"
        },
        {
          cardId: "card_002",
          cardType: "MasterCard",
          cardNumber: "**** **** **** 5678",
          expiryDate: "11/24",
          cardHolderName: "Khizar Alam"
        }
      ]
    },
    "properties": [
      {
        "propertyId": "prop-001",
        "userId": "user_001",
        "propertyNumber": "23405",
        "title": "Apartment 2B – Tower 3",
        "type": "Apartment",
        "address": "123 Elm Street, Springfield",
        "location": {
          "city": "Springfield",
          "country": "USA",
          "lat": 37.208957,
          "lng": -93.292299
        },
        "ownership": "Owner",
        "primaryStatus": "Active",

        "invoices": [
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "inv-2039-A",
            "invoiceNumber": "Invoice # 2039",
            "status": "Overdue",
            "title": "Property Installment",
            "date": "May 25, 2025",
            "amount": "$20,000",
            "pdfUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          },
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "inv-2040-A",
            "invoiceNumber": "Invoice # 2040",
            "status": "Overdue",
            "title": "Maintenance Fee",
            "date": "May 10, 2025",
            "amount": "$2,500",
            "pdfUrl": "https://www.africau.edu/images/default/sample.pdf"
          },
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "inv-2041-A",
            "invoiceNumber": "Invoice # 2041",
            "status": "Paid",
            "title": "Parking Subscription",
            "date": "Apr 18, 2025",
            "amount": "$450",
            "pdfUrl": "https://file-examples.com/storage/fe0e5f3f4c79b28df0b4b0e/2017/10/file-sample_150kB.pdf"
          }
        ],

        "parcels": [
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "123",
            "status": "Pending",
            "receivedAtLabel": "Received at",
            "receivedAtDate": "15th Nov 2023, 4:15pm",
            "statusLabel": "Status",
            "statusDetail": "Your parcel is on hold",
            "receiptDate": "15th Nov 2023, 4:15pm",
            "receivedBy": "John Doe",
            "collectionDate": "15th Nov 2023, 4:15pm",
            "collectedBy": "John Doe",
            "qrData": "https://oneconcierge.example/parcel/123?code=ABCD1234"
          },
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "124",
            "status": "Collected",
            "receivedAtLabel": "Received at",
            "receivedAtDate": "15th Nov 2023, 4:15pm",
            "statusLabel": "Status",
            "statusDetail": "Ready for pickup",
            "receiptDate": "15th Nov 2023, 4:15pm",
            "receivedBy": "John Doe",
            "collectionDate": "15th Nov 2023, 4:15pm",
            "collectedBy": "John Doe",
            "qrData": "https://oneconcierge.example/parcel/124?code=EFGH5678"
          }
        ],

        "bookings": {
          "services": [
            {
              "bookingId": "serv-2001-A",
              "category": "services",
              "serviceType": "laundry",
              "title": "Laundry Service",
              "status": "Pending",
              "date": "12 October, 10:00 AM",
              "price": "$60"
            },
            {
              "bookingId": "serv-2002-A",
              "category": "services",
              "serviceType": "restaurants",
              "title": "Restaurant Reservation",
              "status": "Confirmed",
              "date": "14 October, 9:00 PM",
              "price": "$120"
            }
          ],
          "amenities": [
            {
              "bookingId": "amen-1001-A",
              "category": "amenities",
              "title": "Gym",
              "status": "Confirmed",
              "date": "10 October, 6:00 PM",
              "location": "Community Gym",
              "price": "$60"
            },
            {
              "bookingId": "amen-1002-A",
              "category": "amenities",
              "title": "Cinema",
              "status": "Pending",
              "date": "12 October, 8:00 PM",
              "location": "Tower Cinema",
              "price": "$45"
            }
          ],
          "maintenance": [
            {
              "bookingId": "mnt-87192-A",
              "category": "maintenance",
              "title": "AC Gas Leakage",
              "status": "Pending",
              "date": "13 June 2025, 11:30 AM",
              "price": "$6,500",
              "maintenanceDetail": {
                "issueNumber": "ISS-87192",
                "maintenanceNumber": "87192",
                "engineerName": "James Carter",
                "dateShared": "13 June 2025",
                "estimatedCompletion": "5 hours",
                "servicesProvided": [
                  "Compressor Gas Refill for R320 Air Conditioner",
                  "Labor for AC removal, installation, and gas refill",
                  "Parts Replacement: 3 meter pipe, screws"
                ],
                "grandTotal": "$6,500",
                "typeOfIssue": "AC Gas Leakage",
                "detailedDescription": "Significant refrigerant leak causing inadequate cooling; urgent action required.",
                "preferredAppointment": "June 6 2025 (10 AM - 12 PM)",
                "images": [
                  "https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1758713467/pexels-sabine-otten-2148835519-30341731_thhzyl.jpg",
                  "https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1758713467/pexels-sabine-otten-2148835519-30341731_thhzyl.jpg",
                  "https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1758713467/pexels-sabine-otten-2148835519-30341731_thhzyl.jpg"
                ]
              }
            }
          ]
        },
        "members": {
          "Family": [
            {
              "memberId": "mem-001",
              "name": "Ayesha Alam",
              "relation": "Spouse",
              "email": ""
            }
          ],
          "Guest": [
            {
              "memberId": "mem-002",
              "name": "Ayesha Alam",
              "relation": "Spouse",
              "email": ""
            }
          ]
        }
      },

      {
        "propertyId": "prop-002",
        "userId": "user_001",
        "propertyNumber": "56789",
        "title": "Office 21B – Business Park",
        "type": "Office",
        "address": "789 Liberty Lane, Metropolis",
        "location": {
          "city": "Metropolis",
          "country": "USA",
          "lat": 38.912793,
          "lng": -77.013123
        },
        "ownership": "Owner",
        "primaryStatus": "Active",

        "invoices": [
          {
            "propertyId": "prop-002",
            "userId": "user_001",
            "id": "inv-2042-B",
            "invoiceNumber": "Invoice # 2042",
            "status": "Pending",
            "title": "Club Membership",
            "date": "Jun 02, 2025",
            "amount": "$1,200",
            "pdfUrl": "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
          },
          {
            "propertyId": "prop-002",
            "userId": "user_001",
            "id": "inv-2043-B",
            "invoiceNumber": "Invoice # 2043",
            "status": "Paid",
            "title": "Water Bill",
            "date": "May 29, 2025",
            "amount": "$110",
            "pdfUrl": "https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf"
          }
        ],

        "parcels": [
          {
            "propertyId": "prop-002",
            "userId": "user_001",
            "id": "125",
            "status": "Collected",
            "receivedAtLabel": "Received at",
            "receivedAtDate": "15th Nov 2023 - 4:15pm",
            "statusLabel": "Status",
            "statusDetail": "Ready for pickup",
            "receiptDate": "15th Nov 2023, 4:15pm",
            "receivedBy": "John Doe",
            "collectionDate": "15th Nov 2023, 4:15pm",
            "collectedBy": "John Doe",
            "qrData": "https://oneconcierge.example/parcel/125?code=IJKL9012"
          }
        ],

        "bookings": {
          "services": [
            {
              "bookingId": "serv-2003-B",
              "category": "services",
              "serviceType": "laundry",
              "title": "Office Uniform Laundry",
              "status": "Pending",
              "date": "18 October, 9:00 AM",
              "price": "$85"
            }
          ],
          "amenities": [
            {
              "bookingId": "amen-1003-B",
              "category": "amenities",
              "title": "Conference Room",
              "status": "Confirmed",
              "date": "20 October, 3:00 PM",
              "location": "Business Park – Block A",
              "price": "$200"
            }
          ],
          "maintenance": [
            {
              "bookingId": "mnt-87193-B",
              "category": "maintenance",
              "title": "Plumbing Leak – Kitchen Sink",
              "status": "Confirmed",
              "date": "02 July 2025, 02:00 PM",
              "price": "$320",
              "maintenanceDetail": {
                "issueNumber": "ISS-87193",
                "maintenanceNumber": "87193",
                "engineerName": "Aisha Khan",
                "dateShared": "02 July 2025",
                "estimatedCompletion": "3 hours",
                "servicesProvided": [
                  "Leak detection and sealing",
                  "P-trap replacement",
                  "Sealant and fittings"
                ],
                "grandTotal": "$320",
                "typeOfIssue": "Plumbing",
                "detailedDescription": "Leak under kitchen sink due to worn P-trap and loose fittings.",
                "preferredAppointment": "July 3 2025 (1 PM - 4 PM)",
                "images": [
                  "https://images.pexels.com/photos/6153255/pexels-photo-6153255.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]
              }
            }
          ]
        },
        "members": {
          "Family": [
            {
              "memberId": "mem-001",
              "name": "Ayesha Alam",
              "relation": "Spouse",
              "email": ""
            }
          ],
          "Guest": [
            {
              "memberId": "mem-002",
              "name": "Ayesha Alam",
              "relation": "Spouse",
              "email": ""
            }
          ]
        }
      },

      {
        "propertyId": "prop-003",
        "userId": "user_001",
        "propertyNumber": "77881",
        "title": "Villa West End",
        "type": "Villa",
        "address": "456 Corporate Blvd, Gotham",
        "location": {
          "city": "Gotham",
          "country": "USA",
          "lat": 40.712784,
          "lng": -74.005941
        },
        "ownership": "Owner",
        "primaryStatus": "Construction",

        "invoices": [
          {
            "propertyId": "prop-003",
            "userId": "user_001",
            "id": "inv-2100-C",
            "invoiceNumber": "Invoice # 2100",
            "status": "Pending",
            "title": "Construction Milestone 1",
            "date": "Oct 01, 2025",
            "amount": "$50,000",
            "pdfUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          }
        ],

        "parcels": [],

        "bookings": {
          "services": [
            {
              "bookingId": "serv-2004-C",
              "category": "services",
              "serviceType": "restaurants",
              "title": "Family Dinner Reservation",
              "status": "Pending",
              "date": "22 October, 8:30 PM",
              "price": "$250"
            }
          ],
          "amenities": [
            {
              "bookingId": "amen-1004-C",
              "category": "amenities",
              "title": "Private Cinema",
              "status": "Pending",
              "date": "25 October, 9:00 PM",
              "location": "Villa Community Center",
              "price": "$180"
            }
          ],
          "maintenance": [
            {
              "bookingId": "mnt-87194-C",
              "category": "maintenance",
              "title": "Electrical Socket Replacement",
              "status": "Pending",
              "date": "28 June 2025, 01:00 PM",
              "price": "$75",
              "maintenanceDetail": {
                "issueNumber": "ISS-87194",
                "maintenanceNumber": "87194",
                "engineerName": "Miguel Santos",
                "dateShared": "28 June 2025",
                "estimatedCompletion": "1 hour",
                "servicesProvided": [
                  "Faulty socket removal",
                  "New 13A socket installation",
                  "Safety testing"
                ],
                "grandTotal": "$75",
                "typeOfIssue": "Electrical",
                "detailedDescription": "Burn marks and intermittent power; replacement required.",
                "preferredAppointment": "—",
                "images": [
                  "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]
              }
            }
          ]
        },
        "members": {
          "Family": [
            {
              "memberId": "mem-001",
              "name": "Ayesha Alam",
              "relation": "Spouse",
              "email": ""
            }
          ],
          "Guest": [
            {
              "memberId": "mem-002",
              "name": "Ayesha Alam",
              "relation": "Spouse",
              "email": ""
            }
          ]
        }
      }
    ]
  }
]



function FullBodyController(req, res) {
  try {
    // Prefer route param /userData/:id, fallback to ?userId=..
    const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;
    console.log("Received userId:", user_id);

    if (!user_id) {
      return res.status(400).json({ message: 'userId (route param or query) is required.' });
    }

    if (user_id !== 'user_001') {
      return res.status(404).json({ message: 'User not found.' });
    }

    console.log("FullBodyController accessed");
    return res.json({
      success: true,
      data: fullBodyArray
    });
  } catch (error) {
    console.error("Error in FullBodyController:", error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

const fetchInvoicesFromDBwithUserId = async (req,res) => {
  const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;  

  if (!user_id) {
    return res.status(400).json({ message: 'userId (route param or query) is required.' });
  }

  if (user_id !== 'user_001') {
    return res.status(404).json({ message: 'User not found.' });
  }

  console.log("fetchInvoicesFromDBwithUserId accessed");
  console.log("Received invoices:", fullBodyArray[0].properties.flatMap(prop => prop.invoices));

  // returning invoices from the array
  return res.json({
    success: true,
    data: fullBodyArray[0].properties.flatMap(prop => prop.invoices)
  });
}

const fetchCards = async (req,res) => {
  const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;  

  if (!user_id) {
    return res.status(400).json({ message: 'userId (route param or query) is required.' });
  }

  const foundUser = fullBodyArray.find(item => item.user && item.user.id === user_id);
  if (!foundUser) {
    return res.status(404).json({ message: 'User not found.' });
  }
  console.log("fetchCards accessed");
  // const flattenedCards = Object.values(foundUser.user.cards || {}).flat();
  // console.log("Flattened cards:", flattenedCards);

  return res.json({
    success: true,
    data: foundUser.user.cards|| []
  });

}


module.exports = { FullBodyController, fetchInvoicesFromDBwithUserId, fetchCards };

