angular.module("pianoApp", [])

angular.module("pianoApp")
    .controller("pianoController", ["$scope", function($scope) {



        $scope.active =  {
            "#C4":false,
            "C#4":false,
            "D4":false,
            "D#4":false,
            "E4":false,
            "F4":false,
            "F#4":false,
            "G":false,
            "G#4":false,
            "A4":false,
            "A#4":false,
            "B4":false,
            "C5":false
        }


// THIS IS THE ORIGINAL SOUND
        var piano = new Wad(Wad.presets.piano)

        $scope.play = function(note){
            piano.play({pitch:note})
            $scope.active[note] = true
        }


// THIS IS WHAT WE'RE GOING TO CALL THE OSCILATOR
        var oscilator = new Wad(Wad.presets.ghost)

        $scope.oscilateAway = function(note) {
            oscilator.play({pitch:note})
            $scope.active[note] = true
        }

        // $scope.makeOscilator = function() {
        //     console.log("you made an oscilator")

        // }


// THIS IS WHAT WE'RE GOING TO CALL THE FILTER
        var filter = new Wad(Wad.presets.hiHatOpen)

        $scope.filterAway = function(note){
            filter.play({pitch:note})
            $scope.active[note] = true
        }


// removing the pitch from non-keyboard strokes
        var snare = new Wad(Wad.presets.snare)

        $scope.snare = function(){
// how to get it to NOT play a:440
            snare.play({volume: 0.0001 })
            console.log("this should make no sound")
        }


// connects the keyboard keys to notes on the piano
 
        $scope.keyboardPlay = function(event, down){
        var name;
        var pitch = null;
            switch (event.keyCode) {

                case 68:
                    name = "#C4";
                    pitch = 'C4';
                    break;


                case 82:
                    name = "#cSharp";
                    pitch = 'C#4';
                    break;

                case 70:
                    name = "#D4";
                    pitch = 'D4';
                    break;

                case 84:
                    name = "#dSharp"
                    pitch = 'D#4';
                    break;

                case 71:
                    name = "#E4";
                    pitch = 'E4';
                    break;

                case 72:
                    name = "#F4";
                    pitch = 'F4';
                    break;

                case 85:
                    name = "#fSharp";
                    pitch = 'F#4';
                    break;

                case 74:
                    name = "#G4";
                    pitch = 'G4';
                    break;

                case 73:
                    name = "#gSharp";
                    pitch = 'G#4';
                    break;

                case 75:
                    name = "#A4";
                    pitch = 'A4';
                    break;

                case 79:
                    name = "#aSharp";
                    pitch = 'A#4';
                    break;

                case 76:
                    name = "#B4";
                    pitch = 'B4';
                    break;

                case 186:
                    name = "#C5";
                    pitch = 'C5';
                    break;

                // case 20:
                //     if(down) {
                //         $scope.oscilateAway()
                //     }

                default:
                    if(down) {
                    $scope.snare()

                }
                    break;

            }
                    if(down) {
                        $(name).addClass("colorChange")
                        if (pitch != null) {$scope.play(pitch)}
                    }
                    else {
                        $(name).removeClass("colorChange")
                    }
        }


    }])
