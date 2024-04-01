import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

class GuesserScreenMap extends ConsumerWidget {
  const GuesserScreenMap({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return PopScope(
      onPopInvoked: (didPop) {
        context.go('/home');
      },
      child: Scaffold(
        backgroundColor: Colors.black,
        floatingActionButton: FloatingActionButton(
          backgroundColor: const Color.fromARGB(255, 193, 146, 6),
          child: const Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () {
            context.go('/home');
          },
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Stack(
            children: [
              Container(
                color: Colors.grey[850],
              ),
              Positioned(
                top: 10,
                right: 10,
                child: MaterialButton(
                  color: Colors.amber,
                  onPressed: () {
                    context.go('/home/nearby/carousel_display');
                  },
                  child: Text(
                    'Submit',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
