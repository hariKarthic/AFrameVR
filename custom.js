var scene_obj = document.querySelector("a-scene");
console.log(scene_obj);
var sphere_obj = scene_obj.querySelector("#asphere");
console.log(sphere_obj);
var sky_obj = scene_obj.querySelector("#asky")

/*Event listeneres*/
var sphereEventListener = function (data) {
    console.log(data.detail);
};
sphere_obj.addEventListener("custom_event", sphereEventListener);
sphere_obj.emit('custom_event', {'customdata': 'data'}, false);

/*Three JS */
console.log("Getting the spheres threejs primitive");
console.log(sphere_obj.object3D);

console.log("Getting the sky entity's threejs primitives")
console.log(sky_obj.object3DMap);
console.log(`The sphere is in position`, sphere_obj.object3D.getWorldPosition(), ` and rotation`, sphere_obj.object3D.getWorldRotation());