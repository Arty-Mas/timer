presenceTimer = null;
timeWait = 120000;
presenceState = false;

$(document).ready( function (){
    $(document).bind ('mousemove keydown scroll', function (){
        clearTimeout(presenceTimer);
        if (presenceState == true){
            alert("Привет");
        }
        presenceState = false;
        presenceTimer = setTimeout (function (){
            alert("Досвидос");
            presenceState = true;
        },
            timeWait
        );
    })
}
)