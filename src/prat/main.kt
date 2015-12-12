package prat

/**
 * Created by pt2121 on 12/10/15.
 */
import net.yested.*
import net.yested.Component
import net.yested.Div
import net.yested.Fade
import net.yested.bootstrap.Medium
import net.yested.bootstrap.Navbar
import net.yested.bootstrap.NavbarLook
import net.yested.bootstrap.NavbarPosition
import net.yested.bootstrap.ButtonLook
import net.yested.bootstrap.btsButton
import org.w3c.dom.HTMLElement
import kotlin.browser.window
import net.yested.bootstrap.aligned
import net.yested.bootstrap.TextAlign

fun main(args: Array<String>) {

  val navbar = Navbar(id = "appMenuBar",
      look = NavbarLook.DEFAULT,
      position = NavbarPosition.FIXED_TOP) with {
    brand(href = "#") { +"Summon" }
  }

  val divContainer = div {}
  divContainer.setChild(ContentDiv(), Fade())

  page(placeholderElementId = "page") {
    topMenu(navbar)
    content {
      div {
        br();br();br();br();
        +divContainer
      }
    }
  }

}

class ContentDiv : Component {

  fun extractId(str: String): String? = if (str.isNullOrBlank() || "id=" !in str) "" else str.split("id=")[1]

  override val element: HTMLElement = (Div() with {
    row {
      col(Medium(12)) {
        +createInfoDiv("http://localhost:8080/invites/${extractId(window.location.href)}")
      }
    }
  }).element

}

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

  ajaxGet<Invite>(url) {
    placeholder.setChild(
        Div() with {
          row {
            col(Medium(12)) {
              aligned(align = TextAlign.CENTER) {
                +"${it.from.firstName}'d like to send you a free ride."
              }
            }
          }
          br()
          row {
            h4 {
              aligned(align = TextAlign.CENTER) {
                +it.message
              }
            }
          }
          br()
          row {
            aligned(align = TextAlign.CENTER) {
              +"Destination: ${it.destinationAddress}"
            }
          }
          row {
            aligned(align = TextAlign.CENTER) {
              +div {
                btsButton(
                    type = ButtonType.BUTTON,
                    label = { +"Reject" },
                    onclick = { println("Reject!") })
                nbsp()
                btsButton(
                    type = ButtonType.BUTTON,
                    label = { +"Accept" },
                    look = ButtonLook.SUCCESS,
                    onclick = { println("Accept!") })
              }
            }
          }
        }
    )
  }

  return placeholder

}