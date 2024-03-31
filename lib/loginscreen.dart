import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:sign_in_button/sign_in_button.dart';
import 'firebase_options.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'logic.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;
User? _user;

class LoginScreen extends ConsumerWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userAsyncValue = ref.watch(authStateProvider);

    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.black,
          title: userAsyncValue.when(
            data: (user) => user != null
                ? Text('')
                : const Text(
                    'Google Sign In',
                    style: TextStyle(color: Colors.black),
                  ),
            loading: () => const CircularProgressIndicator(),
            error: (error, stackTrace) => Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('Error: $error '),
                Text('StackTrace: $stackTrace'),
              ],
            ),
          )
          // const Text('Google Sign In', style: TextStyle(color: Colors.white)),
          ),
      body: Container(
        decoration: const BoxDecoration(color: Colors.black),
        child: userAsyncValue.when(
          data: (user) =>
              user != null ? WelcomePage(user: user) : _googleSignInButton(),
          loading: () => const CircularProgressIndicator(),
          error: (error, stackTrace) => Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Error: $error '),
              Text('StackTrace: $stackTrace'),
            ],
          ),
        ),
      ),
    );
  }

  Widget _googleSignInButton() {
    return Center(
      child: Column(
        children: [
          const SizedBox(height: 100),
          SizedBox(
            height: 50,
            child: SignInButton(
              Buttons.google,
              text: 'Sign up with Google',
              onPressed: () {
                _handleGoogleSignIn();
                // _auth.authStateChanges().listen((event) {
                //   _user = event;

                // });
              },
            ),
          ),
        ],
      ),
    );
  }

  void _handleGoogleSignIn() async {
    try {
      GoogleAuthProvider _googleAuthProvider = GoogleAuthProvider();
      _auth.signInWithProvider(_googleAuthProvider);
    } catch (e) {
      print('Error: $e');
    }
  }
}

class WelcomePage extends ConsumerWidget {
  final User user;
  const WelcomePage({super.key, required this.user});

  void pushReplacement(BuildContext context) {
    context.go('/home', extra: 'Data from login screen');
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Container(
        decoration: const BoxDecoration(
          color: Colors.black,
        ),
        child: Center(
          child: ElevatedButton(
            
            child: Text('Welcome ${user.displayName}, Lets get started'),
            onPressed: () => pushReplacement(context),
          ),
        ),
      ),
    );
  }
}
