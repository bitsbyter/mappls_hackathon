// ignore_for_file: sort_child_properties_last

import 'dart:ffi';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:location/location.dart';
import 'package:mappls_gl/mappls_gl.dart';
import 'package:mappls_hackathon/home/homescreen.dart';
import 'package:mappls_hackathon/logic.dart';

class GuesserScreenMap extends ConsumerWidget {
  GuesserScreenMap({super.key});
  static const CameraPosition _kInitialPosition = CameraPosition(
    target: LatLng(24.779478, 77.549033),
    zoom: 3.0,
  );
  LatLng bruh = new LatLng(0.0, 0.0);
  late MapplsMapController mapController;
  static const String MAP_SDK_KEY = "3621541d-5b05-490d-9a69-497febc0ed7a";
  static const String REST_API_KEY = "542dbb0ec43d4e94a956e1e2cbc7f4ff";
  static const String ATLAS_CLIENT_ID =
      "96dHZVzsAuveQBGTIIFIkYeraMJFqt9L-06b5-IZHvdE8vEECvvcoGE3eUKOIV_oMbjvJVxHi7WFgRpj6mCo8Q==";
  static const String ATLAS_CLIENT_SECRET =
      "lrFxI-iSEg_wXM1SNMY3-6sT4f-sjg_mdhe4x4urdW6rIkLmeQ_09lBxUmGFh8EB-F5HRjtEUZJCEOBzmw5vpwGro5mlEB6d";

  void setPermission() async {
    if (!kIsWeb) {
      final location = Location();
      final hasPermissions = await location.hasPermission();
      if (hasPermissions != PermissionStatus.granted) {
        await location.requestPermission();
      }
    }
  }

  @override
  void initState() {
    MapplsAccountManager.setMapSDKKey(MAP_SDK_KEY);
    MapplsAccountManager.setRestAPIKey(REST_API_KEY);
    MapplsAccountManager.setAtlasClientId(ATLAS_CLIENT_ID);
    MapplsAccountManager.setAtlasClientSecret(ATLAS_CLIENT_SECRET);

    setPermission();
  }

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
                child: MapplsMap(
                  initialCameraPosition: _kInitialPosition,
                  onMapCreated: (mapController) {
                    this.mapController = mapController;
                  },
                  onMapClick: (point, coordinates) async {
                    addMarker(coordinates.longitude, coordinates.latitude);
                    ref.read(GuessLatitudeProvider.notifier).state =
                        coordinates.latitude;
                    ref.read(GuessLongitudeProvider.notifier).state =
                        coordinates.longitude;

                    double? dist = await calculateDistance(
                        ref.read(LatitudeProvider),
                        ref.read(LongitudeProvider),
                        ref.read(GuessLatitudeProvider),
                        ref.read(GuessLongitudeProvider));
                    ref.read(DistanceProvider.notifier).state = dist ?? 0.0;
                    context.go('/home/nearby/carousel_display');
                  },
                  onStyleLoadedCallback: () {
                    // addMarker();
                  },
                ),
                color: Colors.grey[850],
              ),
              // Positioned(
              //   top: 10,
              //   right: 10,
              //   child: MaterialButton(
              //     color: Colors.amber,
              //     onPressed: () {
              //       context.go('/home/nearby/carousel_display');
              //     },
              //     child: Text(
              //       'Submit',
              //       style: TextStyle(color: Colors.white),
              //     ),
              //   ),
              // ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> addImageFromAsset(String name, String assetName) async {
    final ByteData bytes = await rootBundle.load(assetName);
    final Uint8List list = bytes.buffer.asUint8List();
    return mapController.addImage(name, list);
  }

  void addMarker(double longitude, double latitude) async {
    await addImageFromAsset("icon", "assets/symbols/custom-icon.png");
    mapController.addSymbol(SymbolOptions(
        geometry: LatLng(latitude, longitude), iconImage: "icon"));
  }
}
