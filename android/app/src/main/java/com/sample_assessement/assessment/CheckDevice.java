
// package com.investecmobileapp;
package com.sample_assessement.assessment;

import android.widget.Toast;
import android.*;

import android.text.Html;
import android.text.Html.TagHandler;


import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.sun.prism.paint.Color;

import android.os.Build;

import java.util.Map;
// import java.awt.Color;
import java.util.HashMap;

public class CheckDevice extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  CheckDevice(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "CheckDevice";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

  // To check for the device whether it is real device or not
  private boolean isEmulator() {
    return (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
        || Build.FINGERPRINT.startsWith("generic")
        || Build.FINGERPRINT.startsWith("unknown")
        || Build.HARDWARE.contains("goldfish")
        || Build.HARDWARE.contains("ranchu")
        || Build.MODEL.contains("google_sdk")
        || Build.MODEL.contains("Emulator")
        || Build.MODEL.contains("Android SDK built for x86")
        || Build.MANUFACTURER.contains("Genymotion")
        || Build.PRODUCT.contains("sdk_google")
        || Build.PRODUCT.contains("google_sdk")
        || Build.PRODUCT.contains("sdk")
        || Build.PRODUCT.contains("sdk_x86")
        || Build.PRODUCT.contains("vbox86p")
        || Build.PRODUCT.contains("emulator")
        || Build.PRODUCT.contains("simulator");
}


  @ReactMethod
  // public void show(String message, int duration) {

  public void show(int duration) {
    Toast.makeText(getReactApplicationContext(), isEmulator()?"This is not a real device":"This is a real device", duration).show();
  }
  
//     public void show(String toastType, int duration, String message:"") {
//       // Toast toast = Toast.makeText(getReactApplicationContext(), message?message:isEmulator()?"This is not a real device":"This is a real device", duration);
//       String messageTxt;

//       if(toastType == "success"){
//         messageTxt = "<font color='#008000'><b>"+(
//           (message !="")?message:(isEmulator())?"This is not a real device":"This is a real device"
//         )+"</b></font>";
//       }else if(toastType == "error"){
//         messageTxt = "<font color='#ff0000'><b>"+(
//           (message !="")?message:(isEmulator())?"This is not a real device":"This is a real device"
//         )+"</b></font>";
//       }else if(toastType == "warning"){
//         messageTxt = "<font color='#ffff00'><b>"+(
//           (message !="")?message:(isEmulator())?"This is not a real device":"This is a real device"
//         )+"</b></font>";
//       }else{
//         messageTxt = "<font color='#ffff0000'><b>"+(
//           (message !="")?message:(isEmulator())?"This is not a real device":"This is a real device"
//         )+"</b></font>";
//       }

//       Toast.makeText(getReactApplicationContext(), Html.fromHtml(messageTxt), duration).show();
      
//       // View view = toast.getView();
//       // view.setPadding(20, 20, 20, 20);

//       // view.setBackgroundResource(R.color.GREEN);

//       // if(toastType == "success"){
//       //   toast.getView().setBackgroundColor(Color.GREEN);//.parseColor("#008000"));
//       // }else if(toastType == "error"){
//       //   toast.getView().setBackgroundColor(Color.RED);//.parseColor("#ff0000"));
//       // }else if(toastType == "warning"){
//       //   toast.getView().setBackgroundColor(Color.TRANSPARENT);//.parseColor("#ffff00"));
//       // }else{
//       //   toast.getView().setBackgroundColor(Color.TRANSPARENT);
//       // }

      

// //       View view = toast.getView();

// // //Gets the actual oval background of the Toast then sets the colour filter
// // view.getBackground().setColorFilter(YOUR_BACKGROUND_COLOUR, PorterDuff.Mode.SRC_IN);

// // //Gets the TextView from the Toast so it can be editted
// // TextView text = view.findViewById(android.R.id.message);
// // text.setTextColor(YOUR_TEXT_COLOUR);



//       // view.setTextColor(Color.WHITE);
//       // toast.show();
//   }
  
}