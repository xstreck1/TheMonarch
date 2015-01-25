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

Monarch.printChange = function (Unit, Variable, direction) {
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
    for (var i = 0; i < Monarch.Factions.length; i++) {
        Monarch.boundValues(Monarch.state[Monarch.Factions[i]]);
    }
    Monarch.destroy();
    Monarch.loadData();
};

Monarch.endTurn = function () {
    console.log("end turn");
    var event_index = Monarch.selectEvent();
    Monarch.loadPopup(event_index);
};

Monarch.boundValues = function (state_var) {
    state_var.Mood = Math.min(Math.max(state_var.Mood, 0), 100);
    state_var.Count = Math.max(state_var.Mood, 0);
    state_var.Gain = Math.max(state_var.Mood, 0);
    state_var.Pay = Math.max(state_var.Pay, 0);
};

Monarch.choiceMade = function () {
    $("#age_span").html(++Monarch.state.Monarch.Age);
    $("#text_panel").html("<p>You are a year older, sire.</p>");

    for (var i = 0; i < Monarch.Factions.length; i++) {
        if ($("#fund_" + Monarch.Factions[i]).is(":checked")) {
            $("#fund_" + Monarch.Factions[i]).attr("checked", false);


            if (Monarch.Factions[i] === "Mafia") {
                $("#text_panel").append("You fought against the Mafia, they hate you now.</br>");
                Monarch.state[Monarch.Factions[i]].Count /= 2;
                Monarch.state[Monarch.Factions[i]].Mood -= 10;
            }
            else {
                $("#text_panel").append("You funded " + Monarch.Factions[i] + ", they thank you.</br>");
                Monarch.state[Monarch.Factions[i]].Count *= 1.25;
                Monarch.state[Monarch.Factions[i]].Mood += 10;
            }
            Monarch.state[Monarch.Factions[i]].Count = Math.floor(Monarch.state[Monarch.Factions[i]].Count);

            Monarch.state[Monarch.Factions[i]].Pay /= 2;

            Monarch.state.Land.Balance -= 500;
        }
    }

    var money_change = Monarch.accountMoney();
    var interest = Monarch.state.Land.Balance * 0.05;
    money_change += interest;
    var money_message = "<p>The yearly interest is " + interest + ". Your ballance has changed in total by " + money_change + ".</p>";
    Monarch.state.Land.Balance += money_change;
    $("#text_panel").append(money_message);
};

Monarch.accountMoney = function () {
    var money_change = 0;
    for (var i = 0; i < Monarch.Factions.length; i++) {
        var faction = Monarch.Factions[i];
        money_change += (Monarch.state[faction].Gain - Monarch.state[faction].Pay) * Monarch.state[faction].Count;
    }
    return money_change;
};