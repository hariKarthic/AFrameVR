AFRAME.registerComponent('foo', {
    schema: {
        bar: {type: 'number'},
        baz: {type: 'string'}
    },
    init: function () {
        // Do something when component first attached.
        console.log("Foo component is init!!")
    },
    update: function () {
        // Do something when component's data is updated.
    },
    remove: function () {
        // Do something the component or its entity is detached.
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});