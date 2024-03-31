import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final apiKey = '';

Future<void> nearby_api(
    String keyword, String lat, String long, double radius) async {
  String apiUrl = 'https://atlas.mappls.com/api/places/nearby/json';

  String? authToken = '';

  try {
    Dio dio = Dio();

    dio.options.baseUrl = apiUrl;

    Map<String, dynamic> queryParams = {
      'keyword': keyword,
      'refLocation': '$lat,$long',
      'radius': radius,
    };
    Response response = await dio.get(
      apiUrl,
      queryParameters: queryParams,
      options: Options(
        headers: {
          'Content-Type': 'application/json',
        },
      ),
    );

    if (response.statusCode == 200) {
      print(response.data);
    } else {
      print('Request failed with status: ${response.statusCode}');
    }
  } catch (e) {
    print('Error: $e');
  }
}

Future<void> auth_token_api() async {
  try {
    Dio dio = Dio();

    String url = '';

    Map<String, dynamic> data = {
      'grant_type': 'client_credentials',
      'client_id': '',
      'client_secret': '',
    };
    // Making POST request
    Response response = await dio.post(url,
        data: FormData.fromMap(data), // or data
        options: Options(
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        ));

    if (response.statusCode == 200) {
      print(response.data);
    } else {
      print('Request failed: Status code ${response.statusCode}');
    }
  } catch (e) {
    print('Error fetching auth token: $e');
  }
}

Future<void> chat_gpt_api(String place) async {
  final dio = Dio();
  final String message = 'tell me something interesting facts about $place';
  final data = {
    'messages': [
      {'role': 'user', 'content': message}
    ],
    'system_prompt': '',
    'temperature': 0.9,
    'top_k': 5,
    'top_p': 0.9,
    'max_tokens': 256,
    'web_access': false,
  };
  final options = Options(
    // baseUrl: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': '',
      'content-length': 237,
      'content-type': 'application/json',
      'Host': 'chatgapt-42.p.rapidapi.com'
    },
  );

  try {
    final response = await dio.post('', data: data, options: options);
    if (response.statusCode == 200) {
      print(response.data);
    }
  } catch (e) {
    throw Exception('Error: $e');
  }
}

Future<void> autosuggest(String filter, String query) async {
  try {
    final dio = Dio();

    String url = '';
    Map<String, dynamic> queryParams = {
      'filer': filter,
      'query': query,
    };

    Response response = await dio.get(
      url,
      queryParameters: queryParams,
      options: Options(
        headers: {
          'Content-Type': 'application/json',
        },
      ),
    );
    if (response.statusCode == 200) {
      print(response.data);
    } else {
      print(response.statusCode);
    }
  } catch (e) {
    throw Exception('$e');
  }
}

Future<void> text_search_api(String region, String query) async {
  try {
    final dio = Dio();
    String url = '';
    Map<String, dynamic> queryParams = {
      'region': region,
      'query': query,
    };

    Response response = await dio.get(
      url,
      queryParameters: queryParams,
      options: Options(
        headers: {
          'Content-Type': 'application/json',
          // if more required...add
        },
      ),
    );
    if (response.statusCode == 200) {
      print(response.data);
    } else {
      print(response.statusCode);
    }
  } catch (e) {
    throw Exception('Error: $e');
  }
}

Future<void> geocoding_api(String address) async {
  try {
    final dio = Dio();
    String url = '';
    Map<String, dynamic> queryParams = {
      'address': address,
    };

    Response response = await dio.get(
      url,
      queryParameters: queryParams,
      options: Options(
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': '',
          'Host': 'trueway-geocoding.p.rapidapi.com',
        },
      ),
    );
    if (response.statusCode == 200) {
      print(response.data);
    } else {
      print(response.statusCode);
    }
  } catch (e) {
    throw Exception('Error: $e');
  }
}
