import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../logic.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;

class HomeScreen extends ConsumerWidget {
  // final User user;

  const HomeScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Stack(
        children: [
          Container(
            color: Colors.black,
            child: Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  GestureDetector(
                    child: Container(
                      width: 150, // Set desired width
                      height: 80,
                      child: Card(
                        color: Color.fromARGB(255, 75, 75, 75),
                        child: Center(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Icon(
                                CupertinoIcons.globe,
                                color: Colors.amber,
                              ),
                              Text(
                                'Guesser',
                                style: TextStyle(
                                    color: Colors.amber[600], fontSize: 20),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    onTap: () {
                      context.go('/home/guesser');
                    },
                  ),
                  GestureDetector(
                    onTap: () {
                      context.go('/home/nearby');
                    },
                    child: Container(
                      width: 150, // Set desired width
                      height: 80,
                      child: Card(
                        color: Color.fromARGB(255, 75, 75, 75),
                        child: Center(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Icon(
                                Icons.location_on,
                                color: Colors.amber,
                              ),
                              Text(
                                'NearME',
                                style: TextStyle(
                                    color: Colors.amber[600], fontSize: 20),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            top: 10,
            left: 10,
            child: IconButton(
              iconSize: 50,
              color: Colors.amber,
              icon: const Icon(Icons.person_pin_circle_outlined),
              onPressed: () {
                context.go('/home/user');
              },
            ),
          ),
          Positioned(
            top: 10,
            right: 10,
            child: IconButton(
              iconSize: 50,
              color: Colors.amber,
              icon: const Icon(Icons.settings),
              onPressed: () {
                context.go('/home/settings');
              },
            ),
          ),
          Positioned(
            top: 10,
            right: (MediaQuery.of(context).size.width) / 2,
            child: IconButton(
              iconSize: 50,
              color: Colors.amber,
              icon: const Icon(Icons.search),
              onPressed: () {
                context.go('/home/search');
              },
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: const Color.fromARGB(255, 193, 146, 6),
        child: const Icon(
          Icons.arrow_back,
          color: Colors.white,
        ),
        onPressed: () {
          // _auth.signOut();
          context.go('/login');
        },
      ),
      backgroundColor: Colors.black,
    );
  }
}
