fcode.event("onReady", function(){
    const ui = fcode.use("ui")
    const runBtn = ui.create("button", ui.navigator)


    runBtn.on("click", function(){
        const code = fcode.use("editor").getContent()
        const exec = new Function(code)
        exec()
    })
})