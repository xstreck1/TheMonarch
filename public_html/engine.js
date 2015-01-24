/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// The main loop


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
    }
    Monarch.state.Workers.Count += 50;
    w2popup.close();
    Monarch.destroy();
    Monarch.loadData();
};