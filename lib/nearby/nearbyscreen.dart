import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mappls_hackathon/logic.dart';
// import 'package:mappls_hackathon/nearby/customslider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class NearByScreen extends ConsumerWidget {
  double _currentSliderValue = 0;
  String _displayedValue = '0.5';

  NearByScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final sliderValue = ref.watch(radiusProvider);
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 0, 0, 0),
      body: Container(
        padding: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              padding: EdgeInsets.all(8.0),
              decoration: BoxDecoration(
                color: Color.fromARGB(255, 70, 70, 70),
                borderRadius: BorderRadius.circular(8.0),
              ),
              child: Text(
                'Radius: ${sliderValue.round()}',
                style: TextStyle(fontSize: 20, color: Colors.amber[600]),
              ),
            ),
            Slider(
              activeColor: Color.fromARGB(255, 39, 48, 107),
              thumbColor: Colors.amber[600],
              value: _currentSliderValue,
              max: 200,
              // min: 0.5,
              divisions: 40,
              onChanged: (double value) {
                print(value);
                ref.read(radiusProvider.notifier).state = value;
                _currentSliderValue = value;
              },
            ),
            SizedBox(height: 40),
            MaterialButton(
                child: Text(
                  'Done',
                  style: TextStyle(color: Colors.amber[600]),
                ),
                color: Color.fromARGB(255, 51, 51, 51),
                onPressed: () {
                  context.go('/home/nearby/carousel_display');
                })
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: const Color.fromARGB(255, 193, 146, 6),
        child: const Icon(
          Icons.arrow_back,
          color: Colors.white,
        ),
        onPressed: () {
          context.go('/home');
        },
      ),
    );
  }

  String updateDisplayedValue() {
    String displayValue = _currentSliderValue.toStringAsFixed(1);

    if (displayValue.endsWith('.0') || displayValue.endsWith('.5')) {
      // If the decimal part is .0 or .5, keep the value as it is
      _displayedValue = displayValue;
    } else {
      // Otherwise, approximate to the closest integer
      _displayedValue = _currentSliderValue.round().toString();
    }
    return _displayedValue;
  }
}
