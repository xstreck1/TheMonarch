/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Create layout
Monarch.buildLayout = function () {
    var pstyle = 'background-color: #F5F5F5; border: 1px solid #CCCCCC; padding: 5px;';
    $('#layout').w2layout({
        name: 'layout',
        panels: [
            {type: 'top', size: "40pt", resizable: true, style: pstyle + "font-size: 15pt; text-align: center", content: 'The Monarch'},
            {type: 'left', size: "200pt", resizable: true, style: pstyle, content: 'left'},
            {type: 'main', style: pstyle, content: '<div id="text_panel"></div>'},
            {type: 'right', size: "300pt", resizable: true, style: pstyle, content: 'right'},
            {type: 'bottom', size: "80pt", resizable: true, style: pstyle, content: 'bottom'}
        ]
    });
};

Monarch.askName = function () {
    w2popup.open({
        title: 'Welcome, sire!',
        body: '<div style="text-align: center;">\n\
            <p>Since you came of age, you are becoming the supreme leader of our glorious counry, as by your birthright</p>\n\
            <p>Please tell your subjects how you require them to address you.</p>\n\
            <p><input type="text" id="input_name" name="name" value="The Monarch"></p>\n\
            <p>Your might is infinite, as is your wisdom.</p>\n\
            <p>Would you like our country to be known under a different name?</p>\n\
            <input type="text" id="input_country" name="name" value="The Monarchy"></div>',
        buttons: '<button class="btn" id="name_ok" >OK</button> ',
        width: "500pt",
        height: "305pt",
        modal: false,
        showClose: false,
        showMax: false
    });

    $(".w2ui-msg-buttons").css("height", "30pt");

    $("#name_ok").click(function () {
        Monarch.startGame();
    });
};

Monarch.startGame = function () {
    Monarch.state.Monarch.Name = $("#input_name").val()
    Monarch.state.Land.Country = $("#input_country").val();
    w2popup.close();

    $("#text_panel").append("<p>Welcome," + Monarch.state.Monarch.Name + " of " + Monarch.state.Land.Country + "</p><p>Please, tell us, what do we do now?</p>");

    w2ui['layout'].content('top', '<span style="float: left">LEADER: ' +
            Monarch.state.Monarch.Name +
            '</span><span style="float: cetner">AGE: <span id="age_span">' +
            Monarch.state.Monarch.Age +
            '</span></span><span style="float: right">COUNTRY: ' +
            Monarch.state.Land.Country +
            '</span>'
            );
};

Monarch.addButtons = function () {
    w2ui['layout'].content('bottom', '<div id="controls"></div>');

    $("#controls").append('<div id="fundings" style="text-align: center">SPEND 500 FROM YOUR YEARLY BUDGET ON:<br/></div>');

    for (var i = 0; i < Monarch.Factions.length; i++) {
        $('<input />', {type: 'checkbox', id: 'fund_' + Monarch.Factions[i], value: "fund_" + Monarch.Factions[i]}).appendTo($("#controls"));
        $("#controls").append(Monarch.Factions[i]);
    }

    $("#controls").append('<div style="text-align: right"><button class="btn" id="end_turn_button" >END TURN</button></div>');

    Monarch.loadData();
    $("#end_turn_button").click(function () {
        Monarch.endTurn();
    });
};

Monarch.destroy = function () {
    w2ui['factions_grid'].destroy();
    w2ui['values_grid'].destroy();
};

Monarch.loadData = function () {
    var factions = [];
    for (var i = 0; i < Monarch.Factions.length; i++) {
        var faction = Monarch.Factions[i];
        factions.push(
                {
                    recid: factions.length + 1,
                    fraction: faction,
                    count: Monarch.state[faction].Count,
                    mood: Monarch.state[faction].Mood,
                    gain: Monarch.state[faction].Gain,
                    pay: Monarch.state[faction].Pay
                }
        );
    }

    var stats = [];
    var getStats = function (type) {
        for (var i = 0; i < Monarch[type].length; i++) {
            var value = Monarch[type][i];
            stats.push(
                    {
                        recid: stats.length + 1,
                        status: value,
                        value: Monarch.state[type][value]
                    }
            );
        }
        ;
    };
    /*getStats("Monarch");
     stats.push(
     {
     recid: stats.length + 1,
     status: "",
     value: ""
     }
     );*/
    getStats("Land");

    // Create the faction Grid
    $('').w2grid({
        name: 'factions_grid',
        columns: [
            {field: 'fraction', caption: 'Fraction', size: '100pt', sortable: false},
            {field: 'count', caption: 'Count', size: '50pt', sortable: false},
            {field: 'mood', caption: 'Mood', size: '50pt', sortable: false},
            {field: 'gain', caption: 'Gain', size: '50pt', sortable: false},
            {field: 'pay', caption: 'Pay', size: '50pt', sortable: false}
        ],
        records: factions
    });
    $('').w2grid({
        name: 'values_grid',
        columns: [
            {field: 'status', caption: '', size: '100pt', sortable: false},
            {field: 'value', caption: 'Value', size: '100pt', sortable: false}
        ],
        records: stats
    });

    // Create the faction Grid
    w2ui['layout'].content('right', w2ui['factions_grid']);
    w2ui['layout'].content('left', w2ui['values_grid']);
};

Monarch.loadPopup = function (event_index) {
    var data = Monarch.events[event_index[0]][event_index[1]];
    $("#event_title").html(data.Title);
    $("#event_picture").attr("src", "./images/" + data.ID + ".jpg");
    $("#event_decription").html(data.Description.replace(/#MONARCH/g, Monarch.state.Monarch.Name));

    $("#popup_buttons").html("");
    for (var i = 0; i < data.Decisions.length; i++) {
        $("#popup_buttons").append(
                '<button class="btn choice_button" onclick="Monarch.selectChoice(' +
                event_index[0] +
                ", " +
                event_index[1] +
                ", " +
                i +
                ')"> ' +
                data.Decisions[i].Option.replace(/#MONARCH/g, Monarch.state.Monarch.Name) +
                '</button><br />'
                );
    }

    $('#popup1').w2popup({showClose: false});

    $(".w2ui-msg-buttons").css("height", (30 * data.Decisions.length) + "pt");
};

Monarch.displayFinalScreen = function (score) {
    w2popup.open({
        title: Monarch.GameOverCauses[Monarch.state.Monarch.GameOver],
        body: '<div style="text-align: center" >'
                + '<br/><img src="images/death_'
                + Monarch.state.Monarch.GameOver
                + '.jpg" alt="death illustration" /><br/><br /> '
                + Monarch.GameOverMessages[Monarch.state.Monarch.GameOver].replace(/#MONARCH/g, Monarch.state.Monarch.Name)
                + '<h2>YOUR SCORE IS: '
                + Math.floor(score)
                + '</h2>'
                + '</div>',
        width: "600pt",
        height: "400pt",
        overflow: 'hidden',
        color: '#333',
        speed: '0.3',
        opacity: '0.8',
        showClose: true,
        onClose: function (event) {
            location.reload();
        }
    });
};