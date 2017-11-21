AFRAME.registerComponent('log', {
    schema: {type: 'string'},
    init: function (data) {
        // Do something when component first attached.
        var strToLog = this.data;
        console.log(strToLog);
        console.log("Log component is init in ", this.el)
    },
    update: function () {
        // Do something when component's data is updated.
        console.log("Log component Updated!!")
    },
    remove: function () {
        // Do something the component or its entity is detached.
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});