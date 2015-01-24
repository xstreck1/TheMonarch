Monarch.events = [
    {
        "ID": 1,
        "Title": "Our Army is drunk and battled itself!",
        "Description": "Our vanguard crossed the river Danube at Hochkirchen and stumbled upon some peddlers selling cheap schnapps. The vanguard purchased the schnapps and became terribly drunk, resulting in a conflict over the schnapps with our following infantry divisions. It quickly escalated and our artilllery divisions mistook our quarrelling troops for enemy troops and bombarded them. Over ten thousand are dead or wounded. What do we do, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
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
                        "Unit": "Land",
                        "Variable": "Ballance",
                        "Operator": "+",
                        "Value": 20
                    }
                ]
            },
            {
                "Option": "What do I care? Send the next army.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Ballance",
                        "Operator": "+",
                        "Value": 20
                    }
                ]
            },
            {
                "Option": "Send appologies to the deceased families and negotiate with our enemy.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Ballance",
                        "Operator": "+",
                        "Value": 20
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 200,
        "Title": "Minister of Agriculture has passed away!",
        "Description": "Your Minister of Agriculture has passed away yesterday due to a heart attack. We need to appoint someone else to fill the gap. What do we do?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 24
            }
        ],
        "Decisions": [
            {
                "Option": "I wish to appoint my childhood friend as a minister.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 250
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Figure it out with the other ministers. #MONARCH does not care about these matters.",
                "Effects": [
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 500
                    }

                ]
            },
            {
                "Option": "Appoint my horse as minister. Now!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 1500
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 201,
        "Title": "Your Army now has a bear as a member.",
        "Description": " During the last war, some of our soldiers took care of a bear - he was then recruited into our army and began competently carrying munition crates. Do you wish to do anything?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Land",
                "Variable": "Balance",
                "Operator": ">",
                "Value": 2500
            }
        ],
        "Decisions": [
            {
                "Option": "I wish to grant the bear an honorary title and provide his army unit with a new insignia - a bear carrying an artillery shell!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 150
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 250
                    }

                ]
            },
            {
                "Option": "This bear is amazing! Provide him with a comfy home and enough food until the end of his life. Long may he live!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2500
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 500
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }


                ]
            },
            {
                "Option": "Interesting! What a great trophy! Many would pay for it. Bring me his pelt!",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 30
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 1500
                    }

                ]
            }
        ]
    },
    {
        "ID": 202,
        "Title": "Backward nation petitions for weapons support against internal rivals",
        "Description": "The ambassador of a backward empire from the far east has asked our glorious nation to provide them with our superior weaponry to face thier internal struggle. What is your stance?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Land",
                "Variable": "Balance",
                "Operator": ">",
                "Value": 500
            }
            ,
            {
                "Unit": "Land",
                "Variable": "Diplomacy",
                "Operator": ">",
                "Value": 50
            }
            ,
            {
                "Unit": "Militarists",
                "Variable": "Mood",
                "Operator": ">",
                "Value": 50

            }
            ,
            {
                "Unit": "Militarists",
                "Variable": "Count",
                "Operator": ">",
                "Value": 5000

            }
        ],
        "Decisions": [
            {
                "Option": "Yes, that is in our interest. Send some advisors and basic materials!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 250
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 50
                    }


                ]
            },
            {
                "Option": "Yes, send them shipments of our rifles, artillery and machine guns. Also, send additional instructors.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 500
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }


                ]
            },
            {
                "Option": "Send my elite divisions and our navy to conquer those puny peoples. I need more colonies!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2500
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Expenses",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 5000
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    }


                ]
            }
            ,
            {
                "Option": "We better not meddle in foreign affairs. Let them decide thier own fate, we are not the ones to judge. Send medical aid to anyone who needs it.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 500
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }


                ]
            }
        ]
    }
    ,
    {
        "ID": 203,
        "Title": "Officers have Killing-Competition.",
        "Description": "Great #MONARCH! During our recent war efforts, two officers of our army had a Killing-Competition. The bet was: Who can kill more humans with their sword. What should we do about this?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Land",
                "Variable": "Balance",
                "Operator": ">",
                "Value": 250
            }
            ,
            {
                "Unit": "Land",
                "Variable": "Diplomacy",
                "Operator": ">",
                "Value": 50
            }
            ,
            {
                "Unit": "Militarists",
                "Variable": "Mood",
                "Operator": ">",
                "Value": 50

            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 32

            }
        ],
        "Decisions": [
            {
                "Option": "This is unacceptable! My Army should know how to behave. Execute them!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }


                ]
            },
            {
                "Option": "Imprison these officers for their crimes and provide a payment to the families of the dead.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 250
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }


                ]
            },
            {
                "Option": "What did they do wrong? They killed enemy soldiers. That is the purpose of war. Give them each a medal!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 30
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }


                ]
            }

        ]
    }
    ,
    {
        "ID": 204,
        "Title": "The Dark Continent is ripe for the taking.",
        "Description": " The southern continent is a wild, primitive and rich land. The benefits will serve us for centuries. But we must be quick, as the other major powers are already claiming their shares. Shall we colonize these savAge lands?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Land",
                "Variable": "Balance",
                "Operator": ">",
                "Value": 500
            }
            ,
            {
                "Unit": "Land",
                "Variable": "Diplomacy",
                "Operator": ">",
                "Value": 50
            }
            ,
            {
                "Unit": "Militarists",
                "Variable": "Mood",
                "Operator": ">",
                "Value": 40

            }
            ,
            {
                "Unit": "Merchants",
                "Variable": "Mood",
                "Operator": ">",
                "Value": 40

            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 18

            }
        ],
        "Decisions": [
            {
                "Option": "Yes, but I wish for our colonists to be peaceful to the natives. Be cautious while claiming the lands.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 200
                    }


                ]
            },
            {
                "Option": "Stay clear of the other powers, but grab every piece of savAge land!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 300
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "+",
                        "Value": 8
                    }


                ]
            },
            {
                "Option": "Why should I let any of the other powers have my lands? Attack them and colonize the whole continent!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 30
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Expenses",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Merchant",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 1500
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "+",
                        "Value": 12
                    }


                ]
            }
            ,
            {
                "Option": "These lands do not belong to us. We will not acquire colonies nor surpress the natives. Send trade missions",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 500
                    }
                    ,
                    {
                        "Unit": "Merchant",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 2
                    }


                ]
            }

        ]
    },
    {
        "ID": 205,
        "Title": "Insular Nation sides with opposing Nations.",
        "Description": "The tropical Island of Nuba has allowed nuclear scientists and military personnel of our enemies to construct long rang nuclear missiles on their soil. This is a direct provocation! #MONARCH, how do we prepare?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Militarists",
                "Variable": "Mood",
                "Operator": ">",
                "Value": 40

            }
            ,
            {
                "Unit": "Land",
                "Variable": "Diplomacy",
                "Operator": "<",
                "Value": 80

            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 68

            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 77

            }
        ],
        "Decisions": [
            {
                "Option": "Send diplomats immediately to negotiate with both the island nation and our enemies!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 100
                    }


                ]
            },
            {
                "Option": "Blockade the air space and see access of the island. Let nothing come through!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 500
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Expenses",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }



                ]
            },
            {
                "Option": "What? Initiate Nuclear War! We strike first!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 80
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Merchant",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 25
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }


                ]
            }

        ]
    }

];