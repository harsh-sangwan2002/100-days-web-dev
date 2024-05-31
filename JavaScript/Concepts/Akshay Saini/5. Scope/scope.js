// lexical means in hierarchy
// lexical env of a function is it's local env along with its parent env
function a() {

    var b = 10;
    c();

    function c() {
        console.log(b);
    }
}

a();