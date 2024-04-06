// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:flutter/cupertino.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter/widgets.dart';
// import 'package:flutter_riverpod/flutter_riverpod.dart';
// import 'package:geolocator/geolocator.dart';
// import 'package:go_router/go_router.dart';
// import 'package:mappls_hackathon/services/apiservice.dart';

// import 'logic.dart';

// final FirebaseAuth _auth = FirebaseAuth.instance;

// class HomeScreen extends ConsumerWidget {

//   // final User user;
//   @override
//   HomeScreen({super.key});
//   @override
//   Widget build(BuildContext context, WidgetRef ref) {
//     final longitudeProvider = ref.watch(LongitudeProvider);
//     final latitudeProvider = ref.watch(LatitudeProvider);

//     double latitude;
//     Position? _currentLocation;
//     late bool servicePermission = false;
//     late LocationPermission permission;
//     Future<Position> _getCurrentLocation() async{
//       servicePermission = await Geolocator.isLocationServiceEnabled();
//       if(!servicePermission){
//         Future.error('Location services are disabled');
//       }
//       permission = await Geolocator.checkPermission();
//       if(permission==LocationPermission.denied){
//         permission=await Geolocator.requestPermission();
//         if(permission==LocationPermission.denied){
//           return Future.error('Location Permissions are denied perm');
//         }
//       }
//       return await Geolocator.getCurrentPosition();
//     }
//     return Scaffold(
//       body: Stack(
//         children: [
//           Container(
//             color: Colors.black,
//             child: Center(
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//                 children: [
//                   GestureDetector(
//                     onTap: ()async{
//                       Map<String, dynamic>? map;
//                       map=await executeGameLogic();
//                       ref.read(GuesserProvider.notifier).state=map??{
//                         "name":"India",
//                         "address":"India",
//                         "eLoc":"SAC1S3"
//                       };
//                       print(ref.read(GuesserProvider));
//                       Map<String, dynamic> coords = await geocoding_api(ref.read(GuesserProvider)['address'])??{
//                         "lat": 24.779478,
//                         "lng": 77.549033
//                       };
//                       print(coords);
//                       ref.read(LongitudeProvider.notifier).state=coords['lng']??77.549033;
//                       ref.read(LatitudeProvider.notifier).state=coords['lat']??24.779478;
//                     },
//                     child: Container(
//                       width: 150, // Set desired width
//                       height: 80,
//                       child: Card(
//                         color: Color.fromARGB(255, 75, 75, 75),
//                         child: Center(
//                           child: Row(
//                             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//                             children: [
//                               Icon(
//                                 CupertinoIcons.globe,
//                                 color: Colors.amber,
//                               ),
//                               Text(
//                                 'Guesser',
//                                 style: TextStyle(
//                                     color: Colors.amber[600], fontSize: 20),
//                               ),
//                             ],
//                           ),
//                         ),
//                       ),
//                     ),
//                   ),
//                   GestureDetector(
//                     onTap: () async{
//                       await _getCurrentLocation().then((value) {
//                         ref.read(LongitudeProvider.notifier).state=value.longitude;
//                         ref.read(LatitudeProvider.notifier).state=value.latitude;
//                       });
//                       print('${longitudeProvider}');
//                       print('${latitudeProvider}');
//                       print('${ref.read(radiusProvider)}');
//                       print('${ref.read(AuthTokenProvider)}');
//                       context.go('/home/nearby');
//                     },
//                     child: Container(
//                       width: 150, // Set desired width
//                       height: 80,
//                       child: Card(
//                         color: Color.fromARGB(255, 75, 75, 75),
//                         child: Center(
//                           child: Row(
//                             mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//                             children: [
//                               Icon(
//                                 Icons.location_on,
//                                 color: Colors.amber,
//                               ),
//                               Text(
//                                 'NearME',
//                                 style: TextStyle(
//                                     color: Colors.amber[600], fontSize: 20),
//                               ),
//                             ],
//                           ),
//                         ),
//                       ),
//                     ),
//                   ),
//                 ],
//               ),
//             ),
//           ),
//           Positioned(
//             top: 10,
//             left: 10,
//             child: IconButton(
//               iconSize: 50,
//               color: Colors.amber,
//               icon: Icon(Icons.person_pin_circle_outlined),
//               onPressed: () {
//                 context.go('/home/user');
//               },
//             ),
//           ),
//         ],
//       ),
//       floatingActionButton: FloatingActionButton(
//         backgroundColor: const Color.fromARGB(255, 193, 146, 6),
//         child: Icon(
//           Icons.arrow_back,
//           color: Colors.white,
//         ),
//         onPressed: () {
//           // _auth.signOut();
//           context.go('/login');
//         },
//       ),
//       backgroundColor: Colors.black,
//     );
//   }
// }
// final LatitudeProvider = StateProvider<double>((ref) => 24.779478); // Change int to the type of your variable
// final LongitudeProvider = StateProvider<double>((ref) => 77.549033);
// final RadiusProvider = StateProvider<int>((ref) => 500);// Change int to the type of your variable

