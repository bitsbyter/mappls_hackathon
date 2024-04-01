// ignore_for_file: prefer_collection_literals

import 'dart:typed_data';

import 'package:circular_countdown_timer/circular_countdown_timer.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mappls_hackathon/home/homescreen.dart';
import 'package:mappls_hackathon/logic.dart';
import 'package:flutter_google_street_view/flutter_google_street_view.dart';

class GuesserScreen extends ConsumerWidget {
  GuesserScreen({super.key});
  Uint8List? _bluePoint;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // LatLng data =
    //     new LatLng(ref.read(LatitudeProvider), ref.read(LongitudeProvider));
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
                child: SafeArea(
                  child: FlutterGoogleStreetView(
                    // initPos: LatLng(37.769263, -122.450727),
                    initPos: LatLng(ref.read(LatitudeProvider), ref.read(LongitudeProvider)),
                    initSource: StreetViewSource.outdoor,
                    initBearing: 30,
                    // markers: <Marker>[
                    //   // Marker(
                    //   //   icon: _bluePoint == null
                    //   //       ? BitmapDescriptor.defaultMarker
                    //   //       : BitmapDescriptor.fromBytes(_bluePoint!),
                    //   //   markerId: MarkerId("0"),
                    //   //   position: SAN_FRAN,
                    //   //   onTap: () {
                    //   //     if (_bluePoint == null)
                    //   //       DefaultAssetBundle.of(context)
                    //   //           .load("assets/images/ic_dot.png")
                    //   //           .then((data) {
                    //   //         setState(() {
                    //   //           _bluePoint = data.buffer.asUint8List();
                    //   //         });
                    //   //       });
                    //   //     else
                    //   //       setState(() => _bluePoint = null);
                    //   //   },
                    //   // )
                    // ].toSet(),
                  ),
                ),
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
                        duration: 250,
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
                            return ""; //here go end ka text in time, if any
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
