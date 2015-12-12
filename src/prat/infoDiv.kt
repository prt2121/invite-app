package prat

/**
 * Created by pt2121 on 12/12/15.
 */
import net.yested.*
import net.yested.Div
import net.yested.bootstrap.Medium
import net.yested.bootstrap.ButtonLook
import net.yested.bootstrap.btsButton
import kotlin.browser.window
import net.yested.bootstrap.aligned
import net.yested.bootstrap.TextAlign

fun createInfoDiv(url: String): Div {

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
    val template = """
                      {
                        "from": {
                          "firstName": "${invite.from.firstName}",
                          "lastName": "${invite.from.lastName}",
                          "phoneNumber": "${invite.from.phoneNumber}",
                          "_id": "${invite.from.id}"
                        },
                        "to": {
                          "firstName": "${invite.to.firstName}",
                          "lastName": "${invite.to.lastName}",
                          "phoneNumber": "${invite.to.phoneNumber}",
                          "_id": "${invite.to.id}"
                        },
                        "destinationLatLng": "${invite.destinationLatLng}",
                        "destinationAddress": "${invite.destinationAddress}",
                        "message": "${invite.message}",
                        "status": "PENDING",
                        "pickupAddress": "",
                        "_id": "${invite.id}"
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
                      println("Reject!")
                    })
                nbsp()
                btsButton(
                    type = ButtonType.BUTTON,
                    label = { +"Accept" },
                    look = ButtonLook.SUCCESS,
                    onclick = {

                      println("inviteJson : $template")
                      println("id : ${extractId(window.location.href)}")
                      ajaxPost<Invite>(
                          AjaxRequest(url = "http://localhost:8080/invites/${extractId(window.location.href)}",
                              type = "PUT",
                              data = template) {
                            println("ajaxPost : ${it.status}")
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