var Controller=require("./controller")

module.exports=function(app){
    app.route("/api/produts")
    .get(Controller.getAll)
    .post(Controller.insert)

    app.route("/api/produts/:id")
    .get(Controller.getById)
   // .put(Controller.update)
    .delete(Controller.delete)
}