import 'dart:math';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mappls_hackathon/services/apiservice.dart';

final authStateProvider = StreamProvider<User?>((ref) {
  return FirebaseAuth.instance.authStateChanges();
});
final GuessLatitudeProvider = StateProvider<double>(
    (ref) => 24.779478); // Change int to the type of your variable
final GuessLongitudeProvider = StateProvider<double>((ref) => 77.549033);
final DistanceProvider = StateProvider<double>((ref) => 0.0);
final radiusProvider = StateProvider((ref) => 0.5);
final GuesserProvider = StateProvider<Map<String, dynamic>>(
    (ref) => {"name": "India", "address": "India", "eLoc": "SAC1S3"});
final AuthTokenProvider = StateProvider<String>((ref) => '');

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
  "Jaipur",
  "Varanasi",
  "Goa Beaches",
  "Kerala Backwaters",
  "Golden Temple",
  "Mysore Palace",
  "Ellora Caves",
  "Hampi",
  "Ranthambore National Park",
  "Kashmir Valley",
  "Rishikesh",
  "Khajuraho Temples",
  "Darjeeling",
  "Ajanta Caves",
  "Sundarbans National Park",
  "Gir National Park",
  "Mahabodhi Temple",
  "Andaman and Nicobar Islands",
  "Qutub Minar",
  "Jaisalmer",
  "Kanyakumari",
  "Sanchi Stupa",
  "Meenakshi Temple",
  "Gateway of India",
  "Jodhpur",
  "Amritsar",
  "Udaipur",
  "Delhi",
  "Shimla",
  "Leh-Ladakh",
  "Pune",
  "Nainital",
  "Kolkata",
  "Mumbai",
  "Chennai",
  "Hyderabad",
  "Bangalore",
  "Agra",
  "Lucknow",
  "Bodh Gaya",
  "Puri",
  "Tirupati",
  "Haridwar",
  "Madurai",
  "Kochi",
  "Pondicherry",
  "Ooty",
  "Manali",
  "Rajkot",
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Nashik",
  "Allahabad",
  "Patna",
  "Ranchi",
  "Gangtok",
  "Bhopal",
  "Indore",
  "Nagpur",
  "Chandigarh",
  "Ludhiana",
  "Kanpur",
  "Ghaziabad",
  "Aurangabad",
  "Visakhapatnam",
  "Thiruvananthapuram",
  "Jammu",
  "Raipur",
  "Dehradun",
  "Gwalior",
  "Jaipur",
  "Jabalpur",
  "Itanagar",
  "Imphal",
  "Shillong",
  "Kohima",
  "Aizawl",
  "Panaji",
  "Agartala",
  "Gangtok",
  "Shimla",
  "Kohima",
  "Itanagar",
  "Raipur",
  "Gandhinagar",
  "Nagpur",
  "Amaravati",
  "Srinagar",
  "Mumbai",
  "Thiruvananthapuram",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Dispur",
  "Patna",
  "Shimla",
  "Lucknow",
  "Kolkata",
  "Bhopal",
  "Mumbai",
  "Jaipur",
  "Agartala",
  "Dehradun",
  "Ranchi",
  "Bhubaneswar",
  "Chandigarh",
  "Panaji",
  "Gangtok",
];

Future<Map<String, dynamic>?> executeGameLogic() async {
  int randomIndex = Random().nextInt(touristPlacesInIndia.length - 1);
  String poi = touristPlacesInIndia[randomIndex];
  Map<String, dynamic>? map = await text_search_api('Taj Mahal');
  if (map != null) {
    Map<String, dynamic> relevantData = {
      "name": map['placeName'],
      "address": map['placeAddress'],
      "eLoc": map['eLoc']
    };
    print(relevantData);
    return relevantData;
  }
}

Future<List<dynamic>?> executeNearbyLogic(
    double lat, double long, double radius) async {
  int randomIndex = Random().nextInt(pointsOfInterest.length - 1);
  // String poi =  pointsOfInterest[randomIndex];
  String poi = pointsOfInterest.join(';');
  print(poi);
  List<dynamic>? map = await nearby_api(poi, lat, long, radius);
  print(map);
  return map;
}

Future<double?> calculateDistance(
    double lat1, double long1, double lat2, double long2) async {
  print('this api running bitch');
  double dist = await distance_matrix_api(lat1, long1, lat2, long2)??0;
  print(dist);
  return dist;
}
