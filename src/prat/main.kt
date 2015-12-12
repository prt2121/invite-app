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
import org.w3c.dom.HTMLElement
import kotlin.browser.window

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

fun extractId(str: String): String? = if (str.isNullOrBlank() || "id=" !in str) "" else str.split("id=")[1]

class ContentDiv : Component {

  override val element: HTMLElement = (Div() with {
    row {
      col(Medium(12)) {
        +createInfoDiv("http://localhost:8080/invites/${extractId(window.location.href)}")
      }
    }
  }).element

}