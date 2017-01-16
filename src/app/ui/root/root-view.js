cs.ns('___config.package___');
___config.package___.view = cs.clazz({
    extend: app.fw.root.view,
    dynamics: {
        markupName: '___config.id___',
        container: null,
        useDefaultPlug: false
    },
    protos: {

        render () {
            this.base()
            this.ui.appendTo(this.container)
        },

        release () {
            this.base()
            this.ui.detach()
        },

        prepareMaskReferences () {
            this.base()
            this.container = $('body')
        }

    }
})