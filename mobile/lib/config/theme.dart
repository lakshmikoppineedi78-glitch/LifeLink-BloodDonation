import 'package:flutter/material.dart';

class AppColors {
  // Primary Colors
  static const Color primary = Color(0xFFDC143C);
  static const Color primaryDark = Color(0xFFB22333);
  static const Color primaryLight = Color(0xFFFFE8E8);

  // Secondary Colors
  static const Color secondary = Color(0xFF1A1A3E);
  static const Color secondaryLight = Color(0xFF2D2D5F);

  // Accent Colors
  static const Color success = Color(0xFF4CAF50);
  static const Color emergency = Color(0xFFFF6B6B);
  static const Color warning = Color(0xFFFFC107);
  static const Color info = Color(0xFF1976D2);

  // Neutral Colors
  static const Color background = Color(0xFFF5F5F5);
  static const Color surface = Color(0xFFFFFFFF);
  static const Color textPrimary = Color(0xFF333333);
  static const Color textSecondary = Color(0xFF666666);
  static const Color border = Color(0xFFE0E0E0);
  static const Color divider = Color(0xFFF0F0F0);

  // Blood Groups
  static const Map<String, Color> bloodGroupColors = {
    'O+': Color(0xFFDC143C),
    'O-': Color(0xFFFF6B6B),
    'A+': Color(0xFF4CAF50),
    'A-': Color(0xFF81C784),
    'B+': Color(0xFF1976D2),
    'B-': Color(0xFF64B5F6),
    'AB+': Color(0xFF9C27B0),
    'AB-': Color(0xFFBA68C8),
  };
}

class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      primaryColor: AppColors.primary,
      scaffoldBackgroundColor: AppColors.background,
      fontFamily: 'Poppins',
      appBarTheme: const AppBarTheme(
        backgroundColor: AppColors.surface,
        elevation: 0,
        centerTitle: true,
        iconTheme: IconThemeData(color: AppColors.secondary),
        titleTextStyle: TextStyle(
          color: AppColors.textPrimary,
          fontSize: 20,
          fontWeight: FontWeight.w600,
          fontFamily: 'Poppins',
        ),
      ),
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        backgroundColor: AppColors.primary,
        foregroundColor: AppColors.surface,
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.surface,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppColors.border),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppColors.border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppColors.primary, width: 2),
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        hintStyle: const TextStyle(color: AppColors.textSecondary, fontSize: 14),
      ),
      textTheme: const TextTheme(
        displayLarge: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.w700,
          color: AppColors.textPrimary,
        ),
        displayMedium: TextStyle(
          fontSize: 24,
          fontWeight: FontWeight.w700,
          color: AppColors.textPrimary,
        ),
        headlineSmall: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.w600,
          color: AppColors.textPrimary,
        ),
        titleLarge: TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.w600,
          color: AppColors.textPrimary,
        ),
        bodyLarge: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w400,
          color: AppColors.textPrimary,
        ),
        bodyMedium: TextStyle(
          fontSize: 14,
          fontWeight: FontWeight.w400,
          color: AppColors.textSecondary,
        ),
        labelLarge: TextStyle(
          fontSize: 14,
          fontWeight: FontWeight.w600,
          color: AppColors.textPrimary,
        ),
      ),
    );
  }
}

class AppStyles {
  // Padding & Spacing
  static const double spacingXS = 4;
  static const double spacingSM = 8;
  static const double spacingMD = 12;
  static const double spacingLG = 16;
  static const double spacingXL = 24;
  static const double spacingXXL = 32;

  // Border Radius
  static const double radiusSM = 8;
  static const double radiusMD = 12;
  static const double radiusLG = 16;
  static const double radiusXL = 24;
  static const double radiusCircle = 50;

  // Shadows
  static const BoxShadow shadowSM = BoxShadow(
    color: Color.fromARGB(8, 0, 0, 0),
    blurRadius: 2,
    offset: Offset(0, 1),
  );

  static const BoxShadow shadowMD = BoxShadow(
    color: Color.fromARGB(12, 0, 0, 0),
    blurRadius: 8,
    offset: Offset(0, 2),
  );

  static const BoxShadow shadowLG = BoxShadow(
    color: Color.fromARGB(15, 0, 0, 0),
    blurRadius: 24,
    offset: Offset(0, 8),
  );
}