class AppConstants {
  // API Configuration
  static const String baseUrl = 'https://api.lifelink.com';
  static const Duration apiTimeout = Duration(seconds: 30);

  // Blood Groups
  static const List<String> bloodGroups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  // Donation Eligibility
  static const int minimumAge = 18;
  static const int minimumWeight = 110; // lbs
  static const Duration minimumDonationInterval = Duration(days: 56); // 8 weeks

  // Emergency Constants
  static const double emergencyBloodRadius = 5.0; // km
  static const Duration emergencyNotificationTimeout = Duration(minutes: 5);

  // Messages
  static const String appName = 'LifeLink';
  static const String appTagline = 'Save Lives with Blood Donation';
  
  // Error Messages
  static const String errorNetwork = 'Network error. Please check your connection.';
  static const String errorServer = 'Server error. Please try again later.';
  static const String errorUnauthorized = 'Please login again.';
  static const String errorNotFound = 'Resource not found.';
  
  // Success Messages
  static const String successRegistration = 'Registration successful! Please verify your email.';
  static const String successDonationRequest = 'Blood request created successfully.';
  static const String successAppointmentBooked = 'Appointment booked successfully.';
}