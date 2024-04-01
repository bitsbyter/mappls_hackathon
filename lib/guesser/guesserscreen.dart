import 'package:circular_countdown_timer/circular_countdown_timer.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mappls_hackathon/logic.dart';

class GuesserScreen extends ConsumerWidget {
  const GuesserScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
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
        child: Container(
          child: Row(
            children: [
              SizedBox(width: 4),
              Container(
                width: (MediaQuery.of(context).size.width - 28) * (2 / 3),
                height: MediaQuery.of(context).size.height,
                color: Colors.grey[850],
              ),
              SizedBox(width: 4),
              Container(
                width: (MediaQuery.of(context).size.width - 28) * (1 / 3),
                height: MediaQuery.of(context).size.height,
                color: Colors.grey[800],
                child: Column(
                  children: [
                    SizedBox(height: 10),
                    SizedBox(
                      height: MediaQuery.of(context).size.height / 3,
                      child: CircularCountDownTimer(
                        duration: 10,
                        initialDuration: 0,
                        controller: CountDownController(),
                        width: MediaQuery.of(context).size.width / 2,
                        height: MediaQuery.of(context).size.height / 2,
                        ringColor: Colors.grey[300]!,
                        ringGradient: null,
                        fillColor: Colors.amber,
                        fillGradient: null,
                        backgroundColor: Colors.black,
                        backgroundGradient: null,
                        strokeWidth: 10.0,
                        strokeCap: StrokeCap.round,
                        textStyle: TextStyle(
                            fontSize: 33.0,
                            color: Colors.white,
                            fontWeight: FontWeight.bold),
                        textFormat: CountdownTextFormat.S,
                        isReverse: true,
                        isReverseAnimation: true,
                        isTimerTextShown: true,
                        autoStart: true,
                        onStart: () {
                          debugPrint('Countdown Started');
                        },
                        onComplete: () {
                          debugPrint('Countdown Ended');
                          context.go('/home/guesser/mapview');
                        },
                        onChange: (String timeStamp) {
                          debugPrint('Countdown Changed $timeStamp');
                        },
                        timeFormatterFunction:
                            (defaultFormatterFunction, duration) {
                          if (duration.inSeconds == 0) {
                            return "";//here go end ka text in time, if any
                          } else {
                            return Function.apply(
                                defaultFormatterFunction, [duration]);
                          }
                        },
                      ),
                    ),
                    SizedBox(height: MediaQuery.of(context).size.height / 4),
                    SizedBox(
                      child: MaterialButton(
                        color: Colors.amber,
                        onPressed: () {
                          context.go('/home/guesser/mapview');
                        },
                        child: Text(
                          "Let's Guess Now",
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(width: 4),
            ],
          ),
        ),
      ),
    );
  }
}
