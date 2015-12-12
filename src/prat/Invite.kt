package prat

/**
 * Created by pt2121 on 12/8/15.
 */
data class Invite(
    val _id: String,
    val from: User,
    val to: User,
    val destinationLatLng: String,
    val destinationAddress: String,
    val message: String,
    val status: Status,
    val pickupAddress: String)

enum class Status {
  PENDING, ACCEPT, REJECT, CANCEL
}

data class User(
    val _id: String,
    val firstName: String,
    val lastName: String,
    val phoneNumber: String)