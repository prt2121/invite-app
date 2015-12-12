package prat
/**
 * Created by pt2121 on 12/8/15.
 */
data class Invite(val from: User,
                  val to: User,
                  val destinationLatLng: String,
                  val destinationAddress: String,
                  val message: String,
                  val status: Status,
                  val originLatLng: String)

enum class Status {
  PENDING, ACCEPT, REJECT, CANCEL
}

data class User(val firstName: String,
                val lastName: String,
                val phoneNumber: String)