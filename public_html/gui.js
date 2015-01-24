/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    var pstyle = 'background-color: #F5F6F7; border: 1px solid #dfdfdf; padding: 5px;';

    // Create layout
    $('#layout').w2layout({
        name: 'layout',
        panels: [
            {type: 'top', size: "30pt", resizable: true, style: pstyle + "font-size: 12pt; text-align: center", content: 'A NEW YEAR HAS COME'},
            {type: 'left', size: "300pt", resizable: true, style: pstyle, content: 'left'},
            {type: 'main', style: pstyle, content: 'main'},
            {type: 'right', size: "300pt", resizable: true, style: pstyle, content: 'right'},
            {type: 'bottom', size: 50, resizable: true, style: pstyle, content: 'bottom'}
        ]
    });

    Monarch.loadData();
    var event_index = Monarch.selectEvent();
    Monarch.loadPopup(event_index);
});

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
    getStats("Monarch");
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
            {field: 'status', caption: 'Status', size: '150pt', sortable: false},
            {field: 'value', caption: 'Value', size: '150pt', sortable: false}
        ],
        records: stats
    });

    // Create the faction Grid
    w2ui['layout'].content('right', w2ui['factions_grid']);
    w2ui['layout'].content('left', w2ui['values_grid']);
};

Monarch.loadPopup = function (event_index) {
    var data = Monarch.events[event_index];
    $("#event_title").html(data.Title)
    $("#event_picture").attr("src", "./images/" + data.ID + ".jpg");
    $("#event_decription").html(data.Description.replace("#MONARCH", Monarch.state.Monarch.Name));

    $("#popup_buttons").html("");
    for (var i = 0; i < data.Decisions.length; i++) {
        $("#popup_buttons").append(
                '<button class="btn choice_button" onclick="Monarch.choice(' +
                event_index +
                ", " +
                i +
                ')"> ' +
                data.Decisions[i].Option +
                '</button><br />'
                );
    }

    $('#popup1').w2popup({showClose: false});
};
