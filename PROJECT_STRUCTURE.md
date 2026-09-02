# LifeLink Blood Donation Platform - Project Structure

```
LifeLink-BloodDonation/
│
├── frontend/                          # Flutter Mobile App
│   ├── lib/
│   │   ├── main.dart                 # App entry point
│   │   ├── config/
│   │   │   ├── theme.dart            # Theme configuration (colors, typography)
│   │   │   └── constants.dart        # App constants
│   │   ├── models/
│   │   │   ├── donor_model.dart
│   │   │   ├── blood_request_model.dart
│   │   │   ├── blood_bank_model.dart
│   │   │   ├── donation_model.dart
│   │   │   └── user_model.dart
│   │   ├── screens/
│   │   │   ├── auth/
│   │   │   │   ├── login_screen.dart
│   │   │   │   ├── register_screen.dart
│   │   │   │   └── splash_screen.dart
│   │   │   ├── home/
│   │   │   │   ├── home_screen.dart
│   │   │   │   └── emergency_request_screen.dart
│   │   │   ├── blood_finder/
│   │   │   │   ├── find_blood_screen.dart
│   │   │   │   ├── blood_group_selection.dart
│   │   │   │   └── nearby_donors_screen.dart
│   │   │   ├── blood_banks/
│   │   │   │   ├── nearby_blood_banks.dart
│   │   │   │   └── blood_bank_details.dart
│   │   │   ├── donation/
│   │   │   │   ├── donate_blood_screen.dart
│   │   │   │   ├── eligibility_check.dart
│   │   │   │   ├── appointment_booking.dart
│   │   │   │   └── donation_history.dart
│   │   │   ├── tracking/
│   │   │   │   ├── request_tracking.dart
│   │   │   │   └── achievement_screen.dart
│   │   │   ├── profile/
│   │   │   │   ├── profile_screen.dart
│   │   │   │   └── edit_profile.dart
│   │   │   └── common/
│   │   │       ├── notifications.dart
│   │   │       └── map_view.dart
│   │   ├── widgets/
│   │   │   ├── blood_group_card.dart
│   │   │   ├── donor_card.dart
│   │   │   ├── blood_bank_card.dart
│   │   │   ├── custom_button.dart
│   │   │   ├── custom_app_bar.dart
│   │   │   └── bottom_nav_bar.dart
│   │   ├── services/
│   │   │   ├── api_service.dart
│   │   │   ├── auth_service.dart
│   │   │   ├── location_service.dart
│   │   │   └── notification_service.dart
│   │   ├── providers/
│   │   │   ├── auth_provider.dart
│   │   │   ├── blood_donor_provider.dart
│   │   │   └── request_provider.dart
│   │   └── utils/
│   │       ├── validators.dart
│   │       └── helpers.dart
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── pubspec.yaml
│   └── README.md
│
├── backend/                           # Node.js/Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js           # MongoDB connection
│   │   │   └── constants.js          # Environment constants
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Donor.js
│   │   │   ├── BloodRequest.js
│   │   │   ├── BloodBank.js
│   │   │   ├── Donation.js
│   │   │   └── Appointment.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── donorController.js
│   │   │   ├── bloodRequestController.js
│   │   │   ├── bloodBankController.js
│   │   │   ├── donationController.js
│   │   │   └── appointmentController.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── donors.js
│   │   │   ├── bloodRequests.js
│   │   │   ├── bloodBanks.js
│   │   │   ├── donations.js
│   │   │   └── appointments.js
│   │   ├── middleware/
│   │   │   ├── auth.js              # JWT verification
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── utils/
│   │   │   ├── sendEmail.js
│   │   │   ├── generateToken.js
│   │   │   └── donorMatching.js
│   │   └── server.js                # Express app entry point
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── web/                              # Web Dashboard (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── API_DOCUMENTATION.md
│   ├── SETUP_GUIDE.md
│   └── FEATURES.md
│
├── .gitignore
└── README.md
```

## 📋 Feature Mapping

### Frontend (Flutter)
- ✅ Home Dashboard with Emergency Button
- ✅ Blood Group Selection
- ✅ Find Blood Donors
- ✅ Nearby Donors Map View
- ✅ Nearby Blood Banks
- ✅ Donate Blood Flow
- ✅ Donation Eligibility Check
- ✅ Appointment Booking
- ✅ Donation History
- ✅ Achievement/Impact Counter
- ✅ Request Tracking
- ✅ Notifications
- ✅ User Profile Management
- ✅ Bottom Navigation

### Backend (Node.js)
- ✅ JWT Authentication
- ✅ User Registration/Login
- ✅ Password Hashing (bcrypt)
- ✅ Donor Database & Search
- ✅ Emergency Blood Request Handling
- ✅ Compatible Donor Matching
- ✅ Blood Bank Management
- ✅ Donation History Tracking
- ✅ Appointment Scheduling
- ✅ Notifications System
- ✅ API for Profile Updates

### Web Dashboard (React)
- ✅ Blood Bank Management
- ✅ Request Analytics
- ✅ Donor Statistics
- ✅ Emergency Alerts

---

Now creating all files...
