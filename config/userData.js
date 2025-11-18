// mock database

const userData = [
  {
    "user": {
      "id": "user_001",
      "email": "khizar@gmail.com",
      "password": "khizar123",
      "name": "Khizar Alam",
      "phone": "+1-555-0123",
      "avatarUrl": "https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto/v1753558038/samples/animals/cat.jpg",
      "termsAccepted": true,
      cards: [
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
            "type": "Apartment",
            "dueDate": "June 5, 2025",
            "paymentDate": "June 20, 2025",
            "downPaymentOnOverDue": "$5,000",
            "lateFeesOnOverDue": "$500",
            "amount": "$5,500",
            "pdfUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          },
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "inv-2040-A",
            "invoiceNumber": "Invoice # 2040",
            "status": "Paid",
            "title": "Maintenance Fee",
            "date": "May 10, 2025",
            "type": "Apartment",
            "dueDate": "June 5, 2025",
            "paymentDate": "June 20, 2025",
            "Paid_item#1": "$1,000",
            "Paid_item#2": "$500",
            "amount": "$1,500",
            "pdfUrl": "https://www.africau.edu/images/default/sample.pdf"
          },

        ],

        "parcels": [
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "123",
            "status": "Pending",
            "receivedAtLabel": "Received at",
            "receivedAtDate": "15th Dec 2023, 4:15pm",
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
            "receivedAtDate": "15th Feb 2023, 4:15pm",
            "statusLabel": "Status",
            "statusDetail": "Ready for pickup",
            "receiptDate": "15th feb 2023, 4:15pm",
            "receivedBy": "John Doe",
            "collectionDate": "15th Nov 2023, 4:15pm",
            "collectedBy": "Faisal Khan",
            "qrData": "https://oneconcierge.example/parcel/124?code=EFGH5678"
          },
          {
            "propertyId": "prop-001",
            "userId": "user_001",
            "id": "125s",
            "status": "Collected",
            "receivedAtLabel": "Received at",
            "receivedAtDate": "15th Oct 2023, 4:15pm",
            "statusLabel": "Status",
            "statusDetail": "Ready for pickup",
            "receiptDate": "15th feb 2023, 4:15pm",
            "receivedBy": "John Doe",
            "collectionDate": "15th Nov 2023, 4:15pm",
            "collectedBy": "Khizar Alam",
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
              "date": "12 October 2025, 10:00 AM",
              "price": "$60"
            },
            {
              "bookingId": "serv-2002-A",
              "category": "services",
              "serviceType": "restaurants",
              "title": "Restaurant",
              "status": "Confirmed",
              "date": "14 October 2025, 9:00 PM",
              "price": "$120"
            }
          ],
          "amenities": [
            {
              "bookingId": "amen-1001-A",
              "category": "amenities",
              "title": "Gym",
              "status": "Confirmed",
              "date": "10 October 2025, 6:00 PM",
              "location": "Community Gym",
              "price": "$60"
            },
            {
              "bookingId": "amen-1002-A",
              "category": "amenities",
              "title": "Cinema",
              "status": "Pending",
              "date": "12 October 2025, 8:00 PM",
              "location": "Tower Cinema",
              "price": "$45"
            }
          ],
          "maintenance": [
            {
              "bookingId": "mnt-87192-A",
              "category": "maintenance",
              "title": "AC Gas Leakage",
              "status": "Pending Quote",
              "date": "13 June 2025, 11:30 AM",
              "price": "$6,500",
              "maintenanceDetail": {
                "issueNumber": "ISS-87192",
                "maintenanceNumber": "87192",
                "engineerName": "Khizar Alam",
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
              "memberIdNumber": 42201,
              "name": "Ayesha Alam",
              "email": "ayesha@example.com",
              "phone": "+92-300-1234567",
              "relation": "Spouse",
              "lastLogin": "2025-10-01T10:15:30Z",
              "status": "Active"
            },
            {
              "memberId": "mem-002",
              "memberIdNumber": 42202,
              "name": "Ali Alam",
              "email": "ali@example.com",
              "phone": "+92-300-7654321",
              "relation": "Son",
              "lastLogin": "2025-09-28T14:20:00Z",
              "status": "Active"
            },
            {
              "memberId": "mem-003",
              "memberIdNumber": 42203,
              "name": "Fatima Alam",
              "email": "fatima@example.com",
              "phone": "+92-300-9876543",
              "relation": "Daughter",
              "lastLogin": "2025-10-02T09:00:00Z",
              "status": "Inactive"

            }
          ],
          "Guest": [
            {
              "memberId": "mem-004",
              "memberIdNumber": 51201,
              "name": "Sara Khan",
              "email": "sara@example.com",
              "phone": "+92-321-1234567",
              "relation": "Friend",
              "expiryDate": "12 June 2025",
              "note": "Visiting for 2 weeks",
              "validTill": "12 June 2025"
            },
            {
              "memberId": "mem-005",
              "memberIdNumber": 51202,
              "name": "Omar Ali",
              "email": "omar@example.com",
              "phone": "+92-322-9876543",
              "relation": "Colleague",
              "expiryDate": "20 June 2025",
              "note": "Attending family event",
              "validTill": "20 June 2025"
            },
            {
              "memberId": "mem-006",
              "memberIdNumber": 51203,
              "name": "Hassan Raza",
              "email": "hassan@example.com",
              "phone": "+92-333-4567890",
              "relation": "Neighbor",
              "expiryDate": "30 June 2025",
              "note": "Guest for weekend",
              "validTill": "30 June 2025"
            }
          ]
        },

        "documents": [
          {
            "documentId": "doc-001",
            "title": "CNIC",
            "status": "pending",
            "url": "https://example.com/documents/cnic_user_001.pdf",
            "size": "1.2 MB",
            "uploadedAt": "2023-01-15T10:00:00Z"
          },
          {
            "documentId": "doc-002",
            "title": "NOC",
            "status": "pending",
            "url": "https://example.com/documents/noc_user_001.pdf",
            "size": "900 KB",
            "uploadedAt": "2023-02-20T14:30:00Z"
          },
          {
            "documentId": "doc-003",
            "title": "Lease Agreement",
            "status": "pending",
            "url": "",
            "size": "",
            "uploadedAt": ""
          }

        ]


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
            "date": "Jun 02 2025, 2025",
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
            "date": "May 29 2025, 2025",
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
              "date": "18 October 2025, 9:00 AM",
              "price": "$85"
            }
          ],
          "amenities": [
            {
              "bookingId": "amen-1003-B",
              "category": "amenities",
              "title": "Conference Room",
              "status": "Confirmed",
              "date": "20 October 2025, 3:00 PM",
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
              "memberIdNumber": 42201,
              "name": "Ayesha Alam",
              "email": "",
              "phone": "",
              "relation": "Spouse",
            }
          ],
          "Guest": [
            {
              "memberId": "mem-002",
              "guestIdNumber": 42202,
              "name": "Ayesha Alam",
              "email": "",
              "phone": "",
              "relation": "Spouse",
              "expiryDate": "12 June 2025",
              "note": "",
              "validTill": "12 June 2025"
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

        "invoices": [],

        "parcels": [],

        "bookings": {
          "services": [],
          "amenities": [
          ],
          "maintenance": [

          ]
        },
        "members": {

        },

         "documents": [
          {
            "documentId": "doc-001",
            "title": "CNIC",
            "status":"pending",
            "url": "https://example.com/documents/cnic_user_001.pdf",
            "size": "1.2 MB",
            "uploadedAt": "2023-01-15T10:00:00Z"
          },
          {
            "documentId": "doc-002",
            "title": "NOC",
            "status":"pending",
            "url": "https://example.com/documents/noc_user_001.pdf",
            "size": "900 KB",
            "uploadedAt": "2023-02-20T14:30:00Z"
          },
          {
            "documentId": "doc-003",
            "title": "Lease Agreement",
            "status":"uploaded",
            "url": "",  
            "size": "",
            "uploadedAt": ""
          }

        ]


      }
    ]
  }
];

module.exports = { userData };