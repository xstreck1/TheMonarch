Monarch.events = [
    {
        "ID": 1,
        "Title": "Our Army is drunk and battled itself!",
        "Description": "Our vanguard crossed the river Danube at Hochkirchen and stumbled upon some peddlers selling cheap schnapps. The vanguard purchased the schnapps and became terribly drunk, resulting in a conflict over the schnapps with our following infantry divisions. It quickly escalated and our artilllery divisions mistook our quarrelling troops for enemy troops and bombarded them. Over ten thousand are dead or wounded. What do we do, my King?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 10
            }
        ],
        "Decisions": [
            {
                "Option": "Execute the foolish officers still alive!",
                "Effects": [
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 20
                    }
                ]
            },
            {
                "Option": "What do I care? Send the next army.",
                "Effects": [
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "*",
                        "Value": 2
                    }
                ]
            },
            {
                "Option": "Send appologies to the deceased families and negotiate with our enemy.",
                "Effects": [
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 20
                    }
                ]
            }
        ]
    }
];