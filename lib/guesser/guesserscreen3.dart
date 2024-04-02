import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mappls_hackathon/home/homescreen.dart';
import 'package:mappls_hackathon/logic.dart';
import 'package:mappls_hackathon/services/apiservice.dart';

class GuesserCard extends ConsumerWidget {
  GuesserCard({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          // FittedBox(
          //   child: Image.asset('assets/bg1.png'),
          //   fit: BoxFit.fitWidth,
          // ),
          Row(
            children: [
              Container(
                width: (MediaQuery.of(context).size.width - 28) * (2 / 3),
                height: MediaQuery.of(context).size.height,
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
                  child: ClipRRect(
                      borderRadius: BorderRadius.circular(30.0),
                      child: Image.asset(
                          'assets/taj.jpg',
                          height: MediaQuery.of(context).size.height,
                          width: 400)
                      ),
                ),
),
              
              Container(
                color: Colors.black,
                width: (MediaQuery.of(context).size.width - 28) * (1 / 3),
                height: MediaQuery.of(context).size.height,
                child: Padding(
                  padding: EdgeInsets.only(left: 12),
                  child: (Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        '${ref.read(GuesserProvider)['name']}',
                        style: TextStyle(
                            fontFamily: 'Montserrat',
                            fontSize: 36,
                            color: Color(0xffFBBC05)),
                      ),
                      Text(
                        '${ref.read(GuesserProvider)['address']}',
                        style: TextStyle(
                            fontFamily: 'Montserrat',
                            fontSize: 16,
                            color: Color(0xffFFFFFF)),
                      ),
                      SizedBox(
                        height: 160,
                        child: Text(
                          "The Taj Mahal stands as a timeless symbol of love, a masterpiece of architectural beauty nestled in the city of Agra, India. Commissioned by the Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is a testament to the enduring power of love and devotion. Completed in 1653 after over 20 years of construction, the Taj Mahal is renowned for its exquisite design and meticulous craftsmanship. Its pure white marble facade, adorned with intricate carvings and inlaid with precious stones, shimmers in the sunlight, evoking a sense of ethereal beauty. The symmetry of its architecture, with its four minarets framing the central dome, reflects the perfection of love and harmony. The Taj Mahal is not merely a monument but a marvel of engineering and design. Its central dome, reaching a height of 240 feet (73 meters), is surrounded by four smaller domes, creating a breathtaking silhouette against the sky. The mausoleum is set within a vast complex encompassing lush gardens, reflecting pools, and ornate gateways, each element adding to its grandeur and magnificence. Visitors from around the world flock to the Taj Mahal to marvel at its splendor and to pay homage to the enduring love story it represents. The monument's significance transcends borders and cultures, serving as a universal symbol of romance and beauty. Despite the passage of centuries, the Taj Mahal continues to captivate the imagination and inspire awe. Its timeless allure remains undiminished, drawing millions of visitors annually to experience its unparalleled magnificence. However, the Taj Mahal also faces challenges, including environmental pollution and the wear and tear of time. Conservation efforts are underway to preserve this architectural wonder for future generations to cherish and admire. In essence, the Taj Mahal stands not only as a monument to love but as a testament to the ingenuity, craftsmanship, and artistic vision of its creators. It is a treasure of human civilization, a jewel in India's cultural heritage, and a symbol of enduring beauty that transcends the bounds of time.",
                          style: TextStyle(
                              fontFamily: 'Montserrat-reg',
                              fontSize: 11,
                              color: Color(0xffCBCBCB)),
                          overflow: TextOverflow.ellipsis,
                          softWrap: true,
                        ),
                      ),
                      Text(
                        'Congrats! You scored ${(ref.read(DistanceProvider) / 1000).toInt() >= 400 ? 100 : ((ref.read(DistanceProvider) / 1000).toInt() >= 100 ? 250 : ((ref.read(DistanceProvider) / 1000).toInt() >= 11 ? 500 : 1000))} points.',
                        style: TextStyle(
                            fontFamily: 'Montserrat',
                            fontSize: 16,
                            color: Color(0xffFBBC05)),
                      ),
                      Center(
                        child: GestureDetector(
                          onTap: () async {
                      Map<String, dynamic>? map;
                      map = await executeGameLogic();
                      ref.read(GuesserProvider.notifier).state = map ??
                          {
                            "name": "India",
                            "address": "India",
                            "eLoc": "SAC1S3"
                          };
                      print(ref.read(GuesserProvider));
                      Map<String, dynamic> coords = await geocoding_api(
                              ref.read(GuesserProvider)['address']) ??
                          {"lat": 24.779478, "lng": 77.549033};
                      print(coords);
                      ref.read(LongitudeProvider.notifier).state =
                          coords['lng'] ?? 77.549033;
                      ref.read(LatitudeProvider.notifier).state =
                          coords['lat'] ?? 24.779478;
                      print(ref.read(LongitudeProvider));
                      print(ref.read(LatitudeProvider));
                      context.go('/home/guesser');
                    },
                          child: Container(
                              height: 30,
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
                                    "Next",
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontFamily: 'Montserrat'),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Image.asset(
                                    'assets/arrow.png',
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
                      )
                    ],
                  )),
                ),
              )
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
        ],
      ),
    );
  }
}
