/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// The main loop

Monarch.selectEvent = function () {
    var usable_events = [];
    for (var event_i = 0; event_i < Monarch.events.length; event_i++) {

        // Checking function
        var checkConditions = function (conditions) {
            for (var cond_i = 0; cond_i < conditions.length; cond_i++) {
                var condition = conditions[cond_i];
                if (condition.Operator === ">") {
                    if (!(Monarch.state[condition.Unit][condition.Variable] > condition.Value)) {
                        return false;
                    }
                } else if (condition.Operator === "<") {
                    if (!(Monarch.state[condition.Unit][condition.Variable] < condition.Value)) {
                        return false;
                    }
                } else if (condition.Operator === "==") {
                    if (!(Monarch.state[condition.Unit][condition.Variable] === condition.Value)) {
                        return false;
                    }
                } else if (condition.Operator === "!=") {
                    if (!(Monarch.state[condition.Unit][condition.Variable] !== condition.Value)) {
                        return false;
                    }
                } else if (condition.Operator === "<=") {
                    if (!(Monarch.state[condition.Unit][condition.Variable] <= condition.Value)) {
                        return false;
                    }
                } else if (condition.Operator === ">=") {
                    if (!(Monarch.state[condition.Unit][condition.Variable] >= condition.Value)) {
                        return false;
                    }
                }
            }
            return true;
        };

        var conditions = Monarch.events[event_i].Conditions;
        if (checkConditions(conditions))
            usable_events.push(event_i);
    }

    var chosen = Math.floor(Math.random() * usable_events.length);
    return usable_events[chosen];
};

Monarch.printChange = function(Unit, Variable, direction) {
    var change = direction ? "up" : "down";
    if (Monarch.Factions.indexOf(Unit) !== -1) {
        var message = "The " + Variable + " of " + Unit + " went " + change;
    } else if (Monarch.Monarch.indexOf(Unit) !== -1) {
        var message = "Your " + Unit + " went " + change;
    } else if (Monarch.Land.indexOf(Unit) !== -1) {
        var message = "The country's " + Unit + " went " + change;
    } else 
        return;
    $("#text_panel").append(message + "<br/>");
}

Monarch.choice = function (event, choice) {
    Monarch.choiceMade();
    
    var choice_var = Monarch.events[event].Decisions[choice];

    $("#text_panel").append("Based on your decision: <br/>");
    for (var i = 0; i < choice_var.Effects.length; i++) {
        var effect = choice_var.Effects[i];
        if (effect.Operator === "+") {
            Monarch.state[effect.Unit][effect.Variable] += effect.Value;
            Monarch.printChange(effect.Unit, effect.Variable, true);
        }
        else if (effect.Operator === "-") {
            Monarch.state[effect.Unit][effect.Variable] -= effect.Value;
            Monarch.printChange(effect.Unit, effect.Variable, false);
        }
        else if (effect.Operator === "*") {
            Monarch.state[effect.Unit][effect.Variable] *= effect.Value;
            Monarch.printChange(effect.Unit, effect.Variable, true);
        }
        else if (effect.Operator === "/") {
            Monarch.state[effect.Unit][effect.Variable] /= effect.Value;
            Monarch.printChange(effect.Unit, effect.Variable, false);
        }
        else if (effect.Operator === "=") {
            Monarch.state[effect.Unit][effect.Variable] = effect.Value;
        }
    }

    w2popup.close();
    Monarch.destroy();
    Monarch.loadData();
};

Monarch.endTurn = function () {
    console.log("end turn");
    var event_index = Monarch.selectEvent();
    Monarch.loadPopup(event_index);
};

Monarch.choiceMade = function() {
    $("#age_span").html(++Monarch.state.Monarch.Age);
    $("#text_panel").html("<p>You are a year older, sire.</p>");
    var money_change = Monarch.accountMoney();
    $("#text_panel").append("The yearly accounting is: " + money_change + "<br/>");
};

Monarch.accountMoney = function () {
    var money_change = 0;
    for (var i = 0; i < Monarch.Factions.length; i++) {
        var faction = Monarch.Factions[i];
        money_change += (Monarch.state[faction].Gain - Monarch.state[faction].Pay) * Monarch.state[faction].Count;
    }
    return money_change;
};