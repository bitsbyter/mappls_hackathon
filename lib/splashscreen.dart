import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  void pushReplacement(BuildContext context) {
    context.go('/login', extra: 'Data from splash screen');
  }

  @override
  void initState() {
    super.initState();

    Future.delayed(
        const Duration(milliseconds: 500), () => pushReplacement(context));
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.black,
      body: Center(child: CircularProgressIndicator(color: Colors.white,),),
    );
  }
}
