cs.ns("___config.package___")
___config.package___.ctrl = cs.clazz({
    extend: app.fw.abstract.ctrl,
    dynamics: {
        header: null
    },
    protos: {
        create () {
            this.base(___config.package___.model, ___config.package___.view)
        }
    }
})