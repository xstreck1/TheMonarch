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

Monarch.choice = function (event, choice) {
    var choice_var = Monarch.events[event].Decisions[choice];

    for (var i = 0; i < choice_var.Effects.length; i++) {
        var effect = choice_var.Effects[i];
        if (effect.Operator === "+") {
            Monarch.state[effect.Unit][effect.Variable] += effect.Value;
        }
        else if (effect.Operator === "-") {
            Monarch.state[effect.Unit][effect.Variable] -= effect.Value;
        }
        else if (effect.Operator === "*") {
            Monarch.state[effect.Unit][effect.Variable] *= effect.Value;
        }
        else if (effect.Operator === "/") {
            Monarch.state[effect.Unit][effect.Variable] /= effect.Value;
        }
        else if (effect.Operator === "=") {
            Monarch.state[effect.Unit][effect.Variable] = effect.Value;
        }
    }

    w2popup.close();
    Monarch.destroy();
    Monarch.loadData();
};