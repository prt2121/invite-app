package prat

/**
 * Created by pt2121 on 12/30/15.
 */
data class Ajax<RESULT>(val url: String,
                        val type: String = "POST",
                        val data: String,
                        val contentType: String = "application/json; charset=utf-8",
                        val dataType: String = "json",
                        val headers: Json,
                        val success: ((RESULT) -> Unit))

@native
interface JQAjax {
  fun <T> get(url: String, headers: Json, loaded: (response: T) -> Unit): Unit = noImpl
  //fun post(url:String, data:Any?, handler:()->Unit, type:String = "json") : Unit = noImpl
  //fun ajax(url:String, type:String, contentType:String, dataType:String, data:Any, success:()->Unit) : Unit = noImpl
  fun <RESULT> ajax(request: Ajax<RESULT>): Unit = noImpl
}

@native("$") public var ajaxJQuery: JQAjax = null!!

public fun <T> get(url: String, headers: Json, loaded: (response: T) -> Unit): Unit {
  ajaxJQuery.get(url = url, headers = headers, loaded = loaded)
}

public fun <RESULT> post(ajaxRequest: Ajax<RESULT>): Unit {
  ajaxJQuery.ajax(ajaxRequest)
}