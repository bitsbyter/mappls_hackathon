import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mappls_hackathon/guesser/guesserscreen.dart';
import 'package:mappls_hackathon/guesser/guesserscreen2.dart';
import 'package:mappls_hackathon/home/homescreen.dart';
import 'package:flutter/services.dart';
import 'package:mappls_hackathon/home/searchscreen.dart';
import 'package:mappls_hackathon/loginscreen.dart';
import 'package:mappls_hackathon/nearby/carouselscreen.dart';
import 'package:mappls_hackathon/nearby/nearbyscreen.dart';
import 'package:mappls_hackathon/home/settings_screen.dart';
import 'package:mappls_hackathon/splashscreen.dart';
import 'package:mappls_hackathon/home/userscreen.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  await SystemChrome.setPreferredOrientations(
      [DeviceOrientation.landscapeLeft, DeviceOrientation.landscapeRight]);
  runApp(ProviderScope(
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      routerConfig: MyAppRoutes()._router,
    );
  }
}

class MyAppRoutes {
  final GoRouter _router = GoRouter(
    initialLocation: '/home/guesser',
    errorPageBuilder: (BuildContext context, state) => MaterialPage(
      key: state.pageKey,
      child: Scaffold(
        body: Center(
          child: Text(
            'Error ${state.error}',
            style: const TextStyle(color: Colors.red),
          ),
        ),
      ),
    ),
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => SplashScreen(),
      ),
      GoRoute(
        path: '/splash',
        builder: (context, state) => SplashScreen(),
      ),
      GoRoute(
        path: '/login',
        builder: (context, state) => LoginScreen(),
      ),
      GoRoute(
        path: '/home',
        builder: (context, state) => HomeScreen(),
      ),
      GoRoute(
        path: '/home/nearby',
        builder: (context, state) => NearByScreen(),
      ),
      GoRoute(
        path: '/home/nearby/carousel_display',
        builder: (context, state) => CarouselScreen(),
      ),
      GoRoute(
        path: '/home/user',
        builder: (context, state) => UserScreen(),
      ),
      GoRoute(
        path: '/home/settings',
        builder: (context, state) => SettingsScreen(),
      ),
      GoRoute(
        path: '/home/search',
        builder: (context, state) => SearchScreen(),
      ),
      GoRoute(
        path: '/home/guesser',
        builder: (context, state) => GuesserScreen(),
      ),
      GoRoute(
        path: '/home/guesser/mapview',
        builder: (context, state) => GuesserScreenMap(),
      ),
    ],
  );
}
