fcode.event("onReady", function(){
    const code = fcode.use("editor").getContent()
    const exec = new Function(code)
    exec()

})