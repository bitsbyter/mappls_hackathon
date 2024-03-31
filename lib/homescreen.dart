import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'logic.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;
User? _user;

class HomeScreen extends ConsumerWidget {
  // final User user;

  const HomeScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Container(color: Colors.black,),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.red,
        child: Text('sign out'),
        onPressed: () {
          _auth.signOut();
          context.go('/login');
        },
      ),
      backgroundColor: Colors.black,
    );
  }
}
