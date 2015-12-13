package prat

/**
 * Created by pt2121 on 12/12/15.
 */
import net.yested.*
import net.yested.Div
import net.yested.bootstrap.Medium
import net.yested.bootstrap.ButtonLook
import net.yested.bootstrap.btsButton
import net.yested.bootstrap.aligned
import net.yested.bootstrap.TextAlign

fun createInfoDiv(url: String): Div {

  var position: String = ""

  locate {
    println("lat ${it.coords.latitude} long ${it.coords.longitude}")
    position = "${it.coords.latitude},${it.coords.longitude}"
  }

  val placeholder = Div() with {
    div {
      br();br();br();br();br();br();br()
      spinner(SpinnerOptions(scale = 0.25f))
      aligned(align = TextAlign.CENTER) {
        +"Fetching message..."
      }
    }
  }

  //// http://demo.yested.net/#ajax
  ajaxGet<Invite>(url) {
    invite ->
    // now invite is not type 'Invite'
    println("id ${invite.from._id}")
    val resourceUrl = "https://intense-waters-9652.herokuapp.com/invites/${invite.from._id}"
    val template = """
                      {
                        "from": {
                          "firstName": "${invite.from.firstName}",
                          "lastName": "${invite.from.lastName}",
                          "phoneNumber": "${invite.from.phoneNumber}",
                          "_id": "${invite.from._id}"
                        },
                        "to": {
                          "firstName": "${invite.to.firstName}",
                          "lastName": "${invite.to.lastName}",
                          "phoneNumber": "${invite.to.phoneNumber}",
                          "_id": "${invite.to._id}"
                        },
                        "destinationLatLng": "${invite.destinationLatLng}",
                        "destinationAddress": "${invite.destinationAddress}",
                        "message": "${invite.message}",
                        "status": "PENDING",
                        "pickupAddress": "",
                        "_id": "${invite._id}"
                      }
                  """

    placeholder.setChild(
        Div() with {
          row {
            col(Medium(12)) {
              aligned(align = TextAlign.CENTER) {
                +"${invite.from.firstName}'d like to send you a free ride."
              }
            }
          }
          br()
          row {
            h4 {
              aligned(align = TextAlign.CENTER) {
                +invite.message
              }
            }
          }
          br()
          row {
            aligned(align = TextAlign.CENTER) {
              +"Destination: ${invite.destinationAddress}"
            }
          }
          row {
            aligned(align = TextAlign.CENTER) {
              +div {
                btsButton(
                    type = ButtonType.BUTTON,
                    label = { +"Reject" },
                    onclick = {
                      val data = template.replace("\"status\": \"PENDING\"", "\"status\": \"REJECT\"")
                      ajaxPost<Invite>(
                          AjaxRequest(url = resourceUrl,
                              type = "PUT",
                              data = data) {
                            println("ajaxPost id : ${it._id}")
                            println("ajaxPost status : ${it.status}")
                          }
                      )
                    })
                nbsp()
                btsButton(
                    type = ButtonType.BUTTON,
                    label = { +"Accept" },
                    look = ButtonLook.SUCCESS,
                    onclick = {
                      val data = template.replace("\"status\": \"PENDING\"", "\"status\": \"ACCEPT\"").replace("\"pickupAddress\": \"\"", "\"pickupAddress\": \"$position\"")
                      println("Accept : $position")
                      ajaxPost<Invite>(
                          AjaxRequest(url = resourceUrl,
                              type = "PUT",
                              data = data) {
                            println("ajaxPost id : ${it._id}")
                            println("ajaxPost status : ${it.status}")
                          }
                      )
                    })
              }
            }
          }
        }
    )
  }

  return placeholder

}