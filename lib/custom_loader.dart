import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class CustomLoader extends StatelessWidget {
  const CustomLoader({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: Stack(children: [
        FittedBox(
          child: Image.asset('assets/bg1.png'),
          fit: BoxFit.fitWidth,
        ),
    
        // Center(child: Image.asset('assets/bg1.png', width: MediaQuery.of(context).size.width,)),
        Center(
          child: Container(
            height: 230,
            width: 300,
            decoration: const BoxDecoration(
              color: Colors.black54,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20),
                  topRight: Radius.circular(20),
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20)),
              boxShadow: [
                BoxShadow(
                  color: Colors.black12,
                  spreadRadius: 20,
                  blurRadius: 7,
                  offset: Offset(0, 3), // changes position of shadow
                ),
              ],
            ),
            child: Padding(
                      padding: EdgeInsets.all(10),
                      child: Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Padding(
                                padding:
                                    EdgeInsets.symmetric(vertical: 10)),
                            Padding(
                                padding: EdgeInsets.symmetric(
                                    horizontal: 20),
                                child: Image.asset(
                                  'assets/logo_small.png',
                                  scale: 2,
                                )),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 25),
                                  child: Center(
                                    child: CircularProgressIndicator(color: Color(0xffFBBC05),),
                                  ),
                                ),
                            Padding(
                              padding:
                                  EdgeInsets.symmetric(vertical: 5),
                              child: Text(
                                "Gamifying Travel...",
                                style: TextStyle(
                                    fontFamily: 'Montserrat',
                                    color: Colors.white,
                                    fontSize: 16),
                                textAlign: TextAlign.center,
                              ),
                            ),
                            Padding(
                                padding:
                                    EdgeInsets.symmetric(vertical: 5)),
                            
                          ],
                        ),
                      ),
                    )
                  
              
          ),
        ),
      ]),
    );
  }
}