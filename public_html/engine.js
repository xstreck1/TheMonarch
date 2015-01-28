/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Checking function
Monarch.checkConditions = function (conditions) {
    conditions.forEach(function (condition) {
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
    });
    return true;
};

// Randomly pick one of the events
Monarch.selectEvent = function () {
    var usable_events = [];
    for (var file_i = 0; file_i < Monarch.events.length; file_i++)
        for (var event_i = 0; event_i < Monarch.events[file_i].length; event_i++) 
            if (Monarch.checkConditions(Monarch.events[file_i][event_i].Conditions)) 
                usable_events.push([file_i, event_i]);

    var chosen = Math.floor(Math.random() * usable_events.length);

    // Log ids of events that can be used
    var events_ids = usable_events.map(function (event) {
        return Monarch.events[event[0]][event[1]].ID;
    });
    console.log("usable events " + events_ids.join(", "));

    return usable_events[chosen];
};

// Print what happenend with a variable
Monarch.printChange = function (Unit, Variable, direction) {
    var change = direction ? "up" : "down";
    var message = "";
    if (Monarch.Factions.indexOf(Unit) !== -1) {
        message = "The " + Variable + " of " + Unit + " went " + change;
    } else if (Monarch.Monarch.indexOf(Unit) !== -1) {
        message = "Your " + Unit + " went " + change;
    } else if (Monarch.Land.indexOf(Unit) !== -1) {
        message = "The country's " + Unit + " went " + change;
    } else
        return;
    $("#text_panel").append(message + "<br/>");
};

// Apply the effects to the current state
Monarch.applyEffect = function (effect, verbose) {
    if (effect.Operator === "+") {
        Monarch.state[effect.Unit][effect.Variable] += effect.Value;
        if (verbose)
            Monarch.printChange(effect.Unit, effect.Variable, true);
    }
    else if (effect.Operator === "-") {
        Monarch.state[effect.Unit][effect.Variable] -= effect.Value;
        if (verbose)
            Monarch.printChange(effect.Unit, effect.Variable, false);
    }
    else if (effect.Operator === "*") {
        Monarch.state[effect.Unit][effect.Variable] *= effect.Value;
        if (verbose)
            Monarch.printChange(effect.Unit, effect.Variable, true);
    }
    else if (effect.Operator === "/") {
        Monarch.state[effect.Unit][effect.Variable] /= effect.Value;
        if (verbose)
            Monarch.printChange(effect.Unit, effect.Variable, false);
    }
    else if (effect.Operator === "=") {
        Monarch.state[effect.Unit][effect.Variable] = effect.Value;
    }
};

// User selected a choice
Monarch.selectChoice = function (event_file, event_index, choice) {
    // Do accounting
    Monarch.resolveYear();

    // Apply decision
    var choice_var = Monarch.events[event_file][event_index].Decisions[choice];
    $("#text_panel").append("Based on your decision: <br/>");
    for (var i = 0; i < choice_var.Effects.length; i++) {
        var effect = choice_var.Effects[i];
        Monarch.applyEffect(effect, true);
    }

    // Bound values
    for (var i = 0; i < Monarch.Factions.length; i++)
        Monarch.boundValues(Monarch.state[Monarch.Factions[i]]);
    Monarch.state.Land.Colonies = Math.max(Monarch.state.Land.Colonies, 0);

    // Reload data
    Monarch.destroy();
    Monarch.loadData();

    // close choice
    w2popup.close();

    // Check age
    if (Monarch.state.Monarch.Age > Monarch.Params.MaxAge)
        Monarch.state.Monarch.GameOver = Monarch.GameOverCauses.indexOf("Old Age");
    if (Monarch.state.Monarch.GameOver > 0)
        Monarch.displayFinalScreen(score);
};

// When end turn is clicked
Monarch.endTurn = function () {
    var event_index = Monarch.selectEvent();
    Monarch.loadPopup(event_index);
};

Monarch.boundValues = function (state_var) {
    state_var.Mood = Math.min(Math.max(state_var.Mood, 0), 100);
    state_var.Count = Math.max(state_var.Count, 0);
    state_var.Gain = Math.max(state_var.Gain, 0);
    state_var.Pay = Math.max(state_var.Pay, 0);
};

Monarch.resolveYear = function () {
    // Increment year
    $("#age_span").html(++Monarch.state.Monarch.Age);
    $("#text_panel").html("<p>You are a year older, sire.</p>");

    // Resolve funding
    Monarch.Factions.forEach(function (faction) {
        // select effects
        var effects;
        if ($("#fund_" + faction).is(":checked")) {
            $("#fund_" + faction).attr("checked", false);

            $("#text_panel").append("You funded " + faction + ", they thank you.</br>");

            effects = jQuery.merge([], Monarch.Params.Funding);

        } else {
            effects = jQuery.merge([], Monarch.Params.NoFunding);
        }
        // apply effects
        effects.forEach(function (effect) {
            if (effect.Unit === "Faction")
                effect.Unit = faction;
            Monarch.applyEffect(effect, false);

        });
    });

    // Count money
    var product = Monarch.computeProduct();
    var interest = Monarch.computeInterest();
    var money_message = "<p>The yearly interest is " + interest + ". The national product was " + product + ".</p>";
    Monarch.state.Land.Balance += product + interest;
    $("#text_panel").append(money_message);
};