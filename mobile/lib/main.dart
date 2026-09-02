import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:provider/provider.dart';
import 'config/theme.dart';
import 'screens/auth/splash_screen.dart';
import 'providers/auth_provider.dart';
import 'providers/blood_donor_provider.dart';
import 'providers/request_provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const LifeLinkApp());
}

class LifeLinkApp extends StatelessWidget {
  const LifeLinkApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => BloodDonorProvider()),
        ChangeNotifierProvider(create: (_) => RequestProvider()),
      ],
      child: GetMaterialApp(
        title: 'LifeLink - Blood Donation',
        debugShowCheckedModeBanner: false,
        theme: AppTheme.lightTheme,
        home: const SplashScreen(),
      ),
    );
  }
}