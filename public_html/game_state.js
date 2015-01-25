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
        "Age": 30,
        "Health": 100,
        "Partners": 2,
        "Children": 2,
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


