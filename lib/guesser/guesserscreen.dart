// ignore_for_file: prefer_collection_literals

import 'dart:typed_data';

import 'package:circular_countdown_timer/circular_countdown_timer.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
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
      // floatingActionButton: FloatingActionButton(
      //   backgroundColor: const Color.fromARGB(255, 193, 146, 6),
      //   child: const Icon(Icons.arrow_back, color: Colors.white),
      //   onPressed: () {
      //     context.go('/home');
      //   },
      // ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Container(
          child: Stack(children: [
            Row(
              children: [
                // SizedBox(width: 4),
                Container(
                  width: (MediaQuery.of(context).size.width - 28) * (2 / 3),
                  height: MediaQuery.of(context).size.height,
                  color: Colors.transparent,
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
                    child: SafeArea(
                      child: FlutterGoogleStreetView(
                        // initPos: LatLng(37.769263, -122.450727),
                        initPos: LatLng(ref.read(LatitudeProvider),
                            ref.read(LongitudeProvider)),
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
                ),
                SizedBox(width: 4),
                Container(
                  width: (MediaQuery.of(context).size.width - 28) * (1 / 3),
                  height: MediaQuery.of(context).size.height,
                  color: Colors.black,
                  child: Padding(
                    padding: EdgeInsets.only(left: 10),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        SizedBox(height: 10),
                        Image.asset(
                          'assets/logo_smallish.png',
                          scale: 4,
                        ),
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
                            fillColor: Color(0xffFBBC05),
                            fillGradient: null,
                            backgroundColor: Color(0xff565656),
                            backgroundGradient: null,
                            strokeWidth: 10.0,
                            strokeCap: StrokeCap.round,
                            textStyle: TextStyle(
                                fontFamily: 'Montserrat',
                                fontSize: 33.0,
                                color: Color(0xffFBBC05),
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
                        SizedBox(
                          height: 1,
                        ),
                        Image.asset('assets/lines.png', scale: 4),
                        // SizedBox(height: MediaQuery.of(context).size.height / 4),
                        GestureDetector(
                          onTap:(){
                            context.go('/home/guesser/mapview');
                          },
                          child: Container(
                              height: 40,
                              width: 120,
                              decoration: BoxDecoration(
                                color: Color(0xffFBBC05),
                                borderRadius: BorderRadius.only(
                                    topLeft: Radius.circular(50),
                                    topRight: Radius.circular(50),
                                    bottomLeft: Radius.circular(50),
                                    bottomRight: Radius.circular(50)),
                              ),
                              child: Center(
                                  child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Text(
                                    "Submit",
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontFamily: 'Montserrat'),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Image.asset(
                                    'assets/pin2.png',
                                    scale: 4,
                                  ),
                                ],
                              ))
                              // child: MaterialButton(
                              //   color: Color(0xffFBBC05),
                              //   onPressed: () {
                              //     context.go('/home/guesser/mapview');
                              //   },
                              //   child: Text(
                              //     "Submit",
                              //     style: TextStyle(color: Colors.black, fontFamily: 'Montserrat'),
                              //   ),
                          
                              // ),
                              ),
                        ),
                        SizedBox(
                          height: 2,
                        )
                      ],
                    ),
                  ),
                ),
                SizedBox(width: 4),
              ],
            ),
            Positioned(
              top: 30,
              left: 45,
                child: GestureDetector(
              onTap: () {
                context.go('/home');
              },
              child: Image.asset('assets/home_button.png', scale: 4),
            ))
          ]),
        ),
      ),
    );
  }
}
