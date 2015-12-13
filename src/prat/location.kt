package prat

/**
 * Created by pt2121 on 12/12/15.
 */

data class Coords(val latitude: String, val longitude: String)

data class Position(val coords: Coords)

@native
private interface Geo {
  fun getCurrentPosition(listener: (position: Position) -> Unit): Unit = noImpl
}

@native("navigator.geolocation") private var geolocation: Geo = null!!

public fun locate(listener: (position: Position) -> Unit): Unit {
  geolocation.getCurrentPosition(listener)
}

fun location() {
  js("""
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {

      });
    }
  """)

  js("if (\"geolocation\" in navigator) { console.log('geo') } else { console.log('NO geo')}")
}