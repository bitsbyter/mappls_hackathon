import 'dart:math';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_google_street_view/flutter_google_street_view.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:geolocator/geolocator.dart';
import 'package:mappls_hackathon/home/homescreen.dart';
import 'package:mappls_hackathon/homescreen.dart';
import 'package:mappls_hackathon/services/apiservice.dart';

final authStateProvider = StreamProvider<User?>((ref) {
  return FirebaseAuth.instance.authStateChanges();
});
final GuessLatitudeProvider = StateProvider<double>(
    (ref) => 24.779478); // Change int to the type of your variable
final GuessLongitudeProvider = StateProvider<double>((ref) => 77.549033);
final DistanceProvider = StateProvider<double>((ref) => 0.0);
final radiusProvider = StateProvider<double>((ref) => 1);
final accessTokenProvider = StateProvider<String>((ref) => '');

class Guesser extends ChangeNotifier {
  Guesser({required this.map});
  Map<String, dynamic> map = {"name": "", "address": "", "eLoc": ""};
  void modifyMap(Map<String, dynamic> newMap) {
    map = newMap;
    notifyListeners();
  }
}

final GuesserProvider = StateProvider<Guesser>((ref) =>
    Guesser(map: {"name": "India", "address": "India", "eLoc": "SAC1S3"}));

// final GuesserProvider = StateProvider<Map<String, dynamic>>(
//     (ref) => {"name": "India", "address": "India", "eLoc": "SAC1S3"});
final AuthTokenProvider = StateProvider<String>((ref) => '');
final chatGPTResponseProvider = StateProvider<String>((ref) => '');

// class datastate extends StateNotifier<logic> {
//   datastate()
//       : super(logic(
//             lat: 24.779478,
//             long: 77.549033,
//             radius: 500,
//             lat1: 24.779478,
//             long1: 77.549033,
//             long2: 77.549033,
//             lat2: 24.779478,
//             status: 'loaded'));
// }

class logic extends ChangeNotifier {
  logic(
      {required this.lat,
      required this.long,
      required this.radius,
      required this.lat1,
      required this.long1,
      required this.long2,
      required this.lat2,
      required this.status,
      required this.searchLocation});
  double lat;
  double long;
  double radius;
  double lat1;
  double long1;
  double lat2;
  double long2;
  String status = 'loaded';
  String searchLocation = '';
  List<String> pointsOfInterest = [
    "Castles",
    "Palaces",
    "Forts",
    "Ancient ruins",
    "History museums",
    "Art museums",
    "Science museums",
    "Specialty museums (e.g., maritime, aviation)",
    "National parks",
    "Waterfalls",
    "Mountains and hiking trails",
    "Beaches",
    "Caves",
    "Lakes and rivers",
    "Skyscrapers",
    "Bridges",
    "Cathedrals and churches",
    "Temples and mosques",
    "Local markets and bazaars",
    "Cultural festivals and events",
    "Traditional villages",
    "Performing arts theaters",
    "Ethnic neighborhoods",
    "Adventure parks",
    "Wildlife sanctuaries and safaris",
    "Snorkeling and diving spots",
    "Ski resorts",
    "Hot springs",
    "Local restaurants and street food stalls",
    "Food markets and food tours",
    "Wineries and vineyards",
    "Breweries and distilleries",
    "Cooking classes and culinary workshops",
    "Theatres and cinemas",
    "Nightclubs and bars",
    "Concert venues",
    "Comedy clubs",
    "Temples",
    "Shrines",
    "Churches",
    "Mosques",
    "Synagogues",
    "Universities and campuses",
    "Libraries",
    "Botanical gardens"
  ];
  List<String> touristPlacesInIndia = [
    "Taj Mahal",
    "BITS Pilani"
    "Qutub Minar",
    "Gateway of India",
    "India Gate",
    "Hawa Mahal",
    "Amer Fort",

    // "Goa Beaches",
    // "Kerala Backwaters",
    // "Golden Temple",
    // "Mysore Palace",
    // "Ellora Caves",
    // "Hampi",
    // "Ranthambore National Park",
    // "Kashmir Valley",
    // "Rishikesh",
    // "Khajuraho Temples",
    // "Darjeeling",
    // "Ajanta Caves",
    // "Sundarbans National Park",
    // "Gir National Park",
    // "Mahabodhi Temple",
    // "Andaman and Nicobar Islands",
    // "Qutub Minar",
    // "Jaisalmer",
    // "Kanyakumari",
    // "Sanchi Stupa",
    // "Meenakshi Temple",
    // "Gateway of India",
    // "Jodhpur",
    // "Amritsar",
    // "Udaipur",
    // "Delhi",
    // "Shimla",
    // "Leh-Ladakh",
    // "Pune",
    // "Nainital",
    // "Kolkata",
    // "Mumbai",
    // "Chennai",
    // "Hyderabad",
    // "Bangalore",
    // "Agra",
    // "Lucknow",
    // "Bodh Gaya",
    // "Puri",
    // "Tirupati",
    // "Haridwar",
    // "Madurai",
    // "Kochi",
    // "Pondicherry",
    // "Ooty",
    // "Manali",
    // "Rajkot",
    // "Ahmedabad",
    // "Surat",
    // "Vadodara",
    // "Nashik",
    // "Allahabad",
    // "Patna",
    // "Ranchi",
    // "Gangtok",
    // "Bhopal",
    // "Indore",
    // "Nagpur",
    // "Chandigarh",
    // "Ludhiana",
    // "Kanpur",
    // "Ghaziabad",
    // "Aurangabad",
    // "Visakhapatnam",
    // "Thiruvananthapuram",
    // "Jammu",
    // "Raipur",
    // "Dehradun",
    // "Gwalior",
    // "Jaipur",
    // "Jabalpur",
    // "Itanagar",
    // "Imphal",
    // "Shillong",
    // "Kohima",
    // "Aizawl",
    // "Panaji",
    // "Agartala",
    // "Gangtok",
    // "Shimla",
    // "Kohima",
    // "Itanagar",
    // "Raipur",
    // "Gandhinagar",
    // "Nagpur",
    // "Amaravati",
    // "Srinagar",
    // "Mumbai",
    // "Thiruvananthapuram",
    // "Bangalore",
    // "Chennai",
    // "Hyderabad",
    // "Dispur",
    // "Patna",
    // "Shimla",
    // "Lucknow",
    // "Kolkata",
    // "Bhopal",
    // "Mumbai",
    // "Jaipur",
    // "Agartala",
    // "Dehradun",
    // "Ranchi",
    // "Bhubaneswar",
    // "Chandigarh",
    // "Panaji",
    // "Gangtok",
  ];
  void setLoading() {
    status = 'loading';
    notifyListeners();
  }

  void setLoaded() {
    status = 'loaded';
    notifyListeners();
  }

  Future<Map<String, dynamic>?> executeGameLogic(String token) async {
    int randomIndex = Random().nextInt(touristPlacesInIndia.length );
    String poi = touristPlacesInIndia[randomIndex];
    status = 'loading';
    notifyListeners();
    Map<String, dynamic>? map = await text_search_api(poi, token);
    if (map != null) {
      Map<String, dynamic> relevantData = {
        "name": map['placeName'],
        "address": map['placeAddress'],
        "eLoc": map['eLoc']
      };
      status = 'loaded';
      notifyListeners();
      print(relevantData);
      return relevantData;
    }
  }

  Future<List<dynamic>> executeNearbyLogic(String token) async {
    int randomIndex = Random().nextInt(pointsOfInterest.length - 1);
    // String poi =  pointsOfInterest[randomIndex];
    String poi = pointsOfInterest.join(';');
    // print(poi);
    // status = 'loading';
    // notifyListeners();
    status = 'loading';
    notifyListeners();
    List<dynamic> map = await nearby_api(poi, lat, long, radius, token);

    // status = 'loaded';

    notifyListeners();
    print(map);
    return map;
  }

  Future<double?> calculateDistance(String token) async {
    print('this api running bitch');
    status = 'loading';
    notifyListeners();
    double dist =
        await distance_matrix_api(lat1, long1, lat2, long2, token) ?? 0;
    status = 'loaded';
    notifyListeners();
    print(dist);
    return dist;
  }

  Future<String> fetchAccessToken() async {
    status = 'loading';
    notifyListeners();
    String token = await auth_token_api();
    return token;
  }

  Future<String> fetchChatGPTResponse(String query) async {
    // status = 'loading';
    notifyListeners();
    String response = await chat_gpt_api(query);
    return response;
  }

  Future<String> fetchLocationCoords(String query) async {
    // status = 'loading';
    notifyListeners();
    String response = await chat_gpt_api(query);
    return response;
  }

  Future<String> fetchSearchCoords(String query) async {
    // status = 'loading';
    notifyListeners();
    String response = await chat_gpt_api(query);
    return response;
  }
}

final logicProvider = StateProvider<logic>((ref) => logic(
    lat: 24.779478,
    long: 77.549033,
    radius: 500,
    lat1: 24.779478,
    long1: 77.549033,
    long2: 77.549033,
    lat2: 24.779478,
    status: 'loaded',
    searchLocation: ''));

final executeSearchButtonLogicProvider = FutureProvider<void>((ref) async {
  ref.read(stateProvider).setLoading();
  Map<String, dynamic> coords =
      await geocoding_api(ref.read(logicProvider).searchLocation) ??
          {"lat": 24.779478, "lng": 77.549033};
  ref.read(LongitudeProvider.notifier).state = coords['lng'] ?? 77.549033;
  ref.read(LatitudeProvider.notifier).state = coords['lat'] ?? 24.779478;
  ref.read(stateProvider).setLoaded();
});

final executeGameLogicProvider = FutureProvider<void>((ref) async {
  print('provider being refresheddfgbdfskjndsgjkdfnsgbkjdfsngvb');

  Map<String, dynamic>? map;
  ref.read(logicProvider.notifier).state.status = 'loading';

  map = await ref
      .watch(logicProvider)
      .executeGameLogic(ref.read(accessTokenProvider));
  ref.read(GuesserProvider).modifyMap(
      map ?? {"name": "India", "address": "India", "eLoc": "SAC1S3"});

  print(ref.read(GuesserProvider));
  Map<String, dynamic> coords =
      await geocoding_api("${ref.read(GuesserProvider).map['name']}, ${ref.read(GuesserProvider).map['address']}") ??
          {"lat": 24.779478, "lng": 77.549033};
  print(coords);
  ref.read(logicProvider.notifier).state.status = 'loaded';
  ref.read(LongitudeProvider.notifier).state = coords['lng'] ?? 77.549033;
  ref.read(LatitudeProvider.notifier).state = coords['lat'] ?? 24.779478;
  print(ref.read(LongitudeProvider));
  print(ref.read(LatitudeProvider));
  // return ref.watch(logicProvider).executeGameLogic();
});
final executeNearbyButtonProvider = FutureProvider<void>((ref) async {
  ref.read(logicProvider).setLoading();
  ref.read(cardStateProvider).populateMap();
  ref.read(GuesserProvider).modifyMap(ref.watch(cardStateProvider).map);

  Map<String, dynamic> coords =
      await geocoding_api(ref.read(GuesserProvider).map['address']) ??
          {"lat": 24.779478, "lng": 77.549033};
  print(coords);
  ref.read(logicProvider).setLoaded();
  ref.read(LongitudeProvider.notifier).state = coords['lng'] ?? 77.549033;
  ref.read(LatitudeProvider.notifier).state = coords['lat'] ?? 24.779478;
});

final executeLocationProvider = FutureProvider<void>((ref) async {
  Position? _currentLocation;
  final longitudeProvider = ref.watch(LongitudeProvider);
  final latitudeProvider = ref.watch(LatitudeProvider);
  late bool servicePermission = false;
  late LocationPermission permission;
  Future<Position> _getCurrentLocation() async {
    servicePermission = await Geolocator.isLocationServiceEnabled();
    if (!servicePermission) {
      Future.error('Location services are disabled');
    }
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        return Future.error('Location Permissions are denied perm');
      }
    }
    return await Geolocator.getCurrentPosition();
  }

  ref.read(logicProvider.notifier).state.status = 'loading';
  await _getCurrentLocation().then((value) {
    ref.read(LongitudeProvider.notifier).state = value.longitude;
    ref.read(LatitudeProvider.notifier).state = value.latitude;
  });
  print('${longitudeProvider}');
  print('${latitudeProvider}');
  print('${ref.read(radiusProvider)}');
  print('${ref.read(AuthTokenProvider)}');
  ref.read(radiusProvider.notifier).state = 1;
  ref.read(logicProvider.notifier).state.status = 'loaded';
  ref.read(logicProvider.notifier).state.notifyListeners();
});

final executeNearbyLogicProvider = FutureProvider<void>((ref) async {
  ref.read(logicProvider.notifier).state.lat = ref.read(LatitudeProvider);
  ref.read(logicProvider.notifier).state.long = ref.read(LongitudeProvider);
  ref.read(logicProvider.notifier).state.radius = ref.read(radiusProvider);
  List<dynamic> list;
  ref.read(logicProvider.notifier).state.status = 'loading';
  list = await ref
      .read(logicProvider)
      .executeNearbyLogic(ref.read(accessTokenProvider));
  ref.read(cardStateProvider.notifier).state.list = list;
  ref.read(cardStateProvider.notifier).state.populateMap();

  ref.read(GuesserProvider.notifier).state.map['name'] =
      ref.watch(cardStateProvider).map['name'];
  ref.read(GuesserProvider.notifier).state.map['address'] =
      ref.watch(cardStateProvider).map['address'];
  ref.read(GuesserProvider.notifier).state.map['eLoc'] =
      ref.watch(cardStateProvider).map['eLoc'];

  ref.read(logicProvider.notifier).state.status = 'loaded';
  // ref.read(logicProvider.notifier).state.notifyListeners();
});

final executeAuthentication = FutureProvider<void>((ref) async {
  ref.read(accessTokenProvider.notifier).state =
      await ref.watch(logicProvider).fetchAccessToken();
  ref.watch(logicProvider).status = 'loaded';
  ref.watch(logicProvider).notifyListeners();
  // print(ref.read(accessTokenProvider));
});

final executeCalculateDistanceProvider = FutureProvider<double?>((ref) async {
  return ref
      .watch(logicProvider)
      .calculateDistance(ref.read(accessTokenProvider));
});

final executeChatGPTProvider = FutureProvider<void>((ref) async {
  ref.read(chatGPTResponseProvider.notifier).state = '';
  ref.read(chatGPTResponseProvider.notifier).state = await ref
      .watch(logicProvider)
      .fetchChatGPTResponse(ref.read(GuesserProvider).map['name']);
  ref.read(logicProvider.notifier).state.status = 'loaded';
  ref.read(logicProvider).notifyListeners();
});

class nearbyCardState extends ChangeNotifier {
  nearbyCardState(
      {required this.cardState,
      required this.index,
      required this.list,
      required this.map});
  bool cardState;
  int index;
  List<dynamic> list;
  Map<String, dynamic> map = {'name': "", 'address': "", 'eLoc': ""};

  void changeCardState(bool value) {
    this.cardState = value;
    notifyListeners(); // Notify listeners of the change
  }

  void changeIndex(int value) {
    this.index = value;
    notifyListeners();
  }

  void populateMap() {
    int randomIndex = Random().nextInt(list.length);
    this.index = randomIndex;
    changeIndex(randomIndex);
    this.map['name'] = list[index]['placeName'];
    this.map['address'] = list[index]['placeAddress'];
    this.map['eLoc'] = list[index]['eLoc'];
    notifyListeners();
  }
}

final cardStateProvider = StateProvider<nearbyCardState>(
    (ref) => nearbyCardState(cardState: false, index: 0, list: [], map: {}));

class lState extends ChangeNotifier {
  
  bool _llState = true;
  bool get llState => _llState;

  void setLoading() {
    _llState = false;
    notifyListeners(); // Notify listeners of the change
  }

  void setLoaded() {
    _llState = true;
    notifyListeners();
  }
}

final stateProvider =
    ChangeNotifierProvider<lState>((ref) => lState());
