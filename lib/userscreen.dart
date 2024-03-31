// import 'dart:js';
import 'package:go_router/go_router.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'logic.dart';

User? user;
final FirebaseAuth _auth = FirebaseAuth.instance;

class UserScreen extends ConsumerWidget {
  const UserScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final user = ref.watch(authStateProvider);

    return Scaffold(
      backgroundColor: Colors.black,
      body: Container(
        child: Column(
          children: [
            const SizedBox(height: 20),
            Container(
              height: 80,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  IconButton(
                    onPressed: () {
                      context.go('/home');
                    },
                    icon: Icon(Icons.arrow_back),
                    color: Colors.amber,
                  ),
                  MaterialButton(
                    color: Color.fromARGB(255, 228, 53, 53),
                    child: const Text('Sign Out'),
                    onPressed: () {
                      _auth.signOut();
                    },
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            // Container(
            //   child: SingleChildScrollView(
            //     child: Column(
            //       children: [
            //         CircleAvatar(
            //           backgroundColor: Colors.black,
            //           radius: 60,
            //           child: Image.network(
            //             user.photoURL,
            //             errorBuilder: (context, error, stackTrace) =>
            //                 Text('image not found'),
            //           ),
            //         ),
            //         Center(
            //           child: Text(
            //             'Email: ${user?.email ?? 'Email not found'}',
            //             style: TextStyle(color: Colors.white),
            //           ),
            //         )
            //       ],
            //     ),
            //   ),
            //   // child:  Text(
            //   //     user?.email ?? 'No name',
            //   //     style: TextStyle(color: Colors.amberAccent),
            //   //     ),
            // ),
          ],
        ),
      ),
    );
  }
}
