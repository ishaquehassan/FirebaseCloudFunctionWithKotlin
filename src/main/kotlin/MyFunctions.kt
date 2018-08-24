external fun require(module:String) : dynamic
external var exports: dynamic

fun main(args: Array<String>) {
    val fireaseFun = require("firebase-functions")

    exports.myTestFun = fireaseFun.https.onRequest{ req , res ->
        res.send("Hello From Kotlin!")
    }
}