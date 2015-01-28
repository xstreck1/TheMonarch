var Monarch = {};

Monarch.Factions = ["Workers", "Farmers", "Merchants", "Clergy", "Militarists", "Nobles", "Academics", "Bureaucrats", "Servants", "Mafia"];
Monarch.Monarch = ["Health", "Partners", "Children"];
Monarch.Land = ["Balance", "Diplomacy", "Colonies"];

Monarch.state = {
    "Workers": {
        "Count": 50,
        "Mood": 50.0,
        "Gain": 3.0,
        "Pay": 2.0
    },
    "Farmers": {
        "Count": 100,
        "Mood": 50.0,
        "Gain": 3.0,
        "Pay": 2.0
    },
    "Merchants": {
        "Count": 25,
        "Mood": 50.0,
        "Gain": 4.0,
        "Pay": 3.0
    },
    "Clergy": {
        "Count": 20,
        "Mood": 50.0,
        "Gain": 2.0,
        "Pay": 5.0
    },
    "Militarists": {
        "Count": 50,
        "Mood": 50.0,
        "Gain": 1.0,
        "Pay": 2.0
    },
    "Nobles": {
        "Count": 5,
        "Mood": 50.0,
        "Gain": 5,
        "Pay": 10
    },
    "Academics": {
        "Count": 10,
        "Mood": 50.0,
        "Gain": 3.0,
        "Pay": 5.0
    },
    "Bureaucrats": {
        "Count": 10,
        "Mood": 50.0,
        "Gain": 0.0,
        "Pay": 3.0
    },
    "Servants": {
        "Count": 1,
        "Mood": 50.0,
        "Gain": 2.0,
        "Pay": 2.0
    },
    "Mafia": {
        "Count": 1,
        "Mood": 50.0,
        "Gain": 0.0,
        "Pay": 5.0
    },
    "Monarch": {
        "Name": "The Monarch 1",
        "Age": 16,
        "Health": 100,
        "Partners": 0,
        "Children": 0,
        "GameOver": 0
    },
    "Land": {
        "Balance": 1000,
        "Country": "The Monarchy 1",
        "Diplomacy": 10,
        "Colonies": 3,
        "EventChain": 0
    }
};

Monarch.GameOverMessages = [
    "",
    "A Knife in the dark, a gunshot in the night - or some spiced wine. There have always been many ways to kill someone. And history has proven, that even the highest rulers are not safe. But in order to be targeted, they must have done something too wrong or too right. You are dead, murdered. By whom? You will never know, but the world which you leave behind might find out. At least you annoyed someone enough.",
    "Warfare is always brutal. Many die, thousands are homeless and much is destroyed. But war has always been a tool of politics. Also your politics. But nuclear warfare... who would have thought that when a dozen of nations fire their hundreds of warheads aimlessly all over the globe, that nothing of importance will survive? You haven't, to be honest. What survived and what will become of the earth, the world you left behind might find out. But you will only remember the mushroom clouds on the horizon.",
    "You tripped. Or drove drunk instead of letting your servant drive. Or you fell of your costum-fashioned saddle you used to... ride on horses and got buried under your loved steed. Though some might rumor of assassination, pure coincidence and and bad luck are much better killers. Whatever the exact circumstances of your death, your reign has ended and the world you left behind now has to continue without you.",
    "Leaders who fight in battle themselves are often regarded as great leaders and heroes, who value their soldiers lives the same as their own. The downside is, as you are not immortal, that bullets still kill you. This is what happened. Maybe your soldiers will fight on, win the war and errect great statues the name of your heroic last stand. Or they will be swept away and killed the same way you where.",
    "No matter the color of the flags waved, a full scale revolution is always dangerous, if left unattended. People resent their leader or are agitated by other, powerful leaders. When the mob marches, the actions are limited. Your actions where limited and you chose unwise. You are on the run now - or soon in a revolutionary prison or even shot on the spot. Who knows - but this country is no longer a monarchy.",
    "Not always is a monarch forced to abdicate his crown. Sometimes he wishes to give more power to the people and remains as head of state with reduced political and judical influence. Or he wishes to crown his hier before death of old age. Who knows what made you do it. You are not the absolute monarch anymore and effectively do not rule this country anymore.",
    "Some say the best way to part this world is that of old age, after a life of fullfillment and joy. Did you lead such a life? Only those you leave behind will know. But in any case, it means you have lead a long life and managed to evade the perils of war, politics and domestic management. Better than to be killed or succumb to a revolution, or not? Rest in Peace, Great #MONARCH!"
];

Monarch.GameOverCauses = [
    "",
    "Assassination",
    "Nuclear Warfare",
    "Accident",
    "Battle",
    "Revolution",
    "Abdication",
    "Old Age"
];

// Tweakable values outside the events
Monarch.Params = {
    "Interest": 1.05, // Yearly interest, i.e. new_ballance = old_ballance * interest
    "MaxAge": 81, // When the monarch dies due to old age
    "Funding": [// What happens when you fund a faction, Faction is substituted for the real name
        {
            "Unit": "Faction",
            "Variable": "Mood",
            "Operator": "+",
            "Value": 10
        },
        {
            "Unit": "Faction",
            "Variable": "Count",
            "Operator": "*",
            "Value": 1.25
        },
        {
            "Unit": "Faction",
            "Variable": "Pay",
            "Operator": "/",
            "Value": 1.5
        },
        {
            "Unit": "Land",
            "Variable": "Ballance",
            "Operator": "-",
            "Value": 500
        }
    ],
    "NoFunding": [ // What happens when you do not fund a faction
        {
            "Unit": "Faction",
            "Variable": "Mood",
            "Operator": "-",
            "Value": 2
        }
    ]
};

// For a faction, return the initial mood (should be between 0 and 100)
Monarch.getInitialMood = function() {
    Math.floor(Math.random() * 50 + 25);
};

// Function that counts the final score at the end of the game
Monarch.countScore = function() {
    var score = (Monarch.state.Land.Balance / 1000) + Monarch.state.Monarch.GameOver * 10 + Monarch.state.Land.Diplomacy + Monarch.state.Land.Colonies * 2;
    Monarch.Factions.forEach(function(faction) {
        score += (Monarch.state[faction].Mood + Monarch.state[faction].Count) / 10;
    });
    return score;
};