/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Monarch.events[2] = [
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
                        "Variable": "Pay",
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
                        "Variable": "Pay",
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
                        "Variable": "Gain",
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
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }


                ]
            }

        ]
    }
    ,
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
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3

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
                        "Variable": "Pay",
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
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 2
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 207,
        "Title": "Post-War Political Blocks threaten World Peace",
        "Description": "The Aftermath of the last war still weighs heavily on the world, but opposing political blocks form! Many of these posses nuclear capacities like we do. What do we do, #Monarch?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 68
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "<",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Nuke everyone!",
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
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 2
                    }
                ]
            },
            {
                "Option": "Invite all major powers to a United Security Council.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 15
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
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchant",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
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
                        "Unit": "Clergy",
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
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 3
                    }
                ]
            },
            {
                "Option": "Form a strong alliance of same minded nations with you at the top.",
                "Effects": [
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
                        "Value": 300
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 2000
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
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 3
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 208,
        "Title": "Fascist-Militarist Faction threatens with coup d'état.",
        "Description": "A prominent militarist leader has rallied different right-winged political parties, parts of police and military to overthrow our monarchy and proclaim a fascist state, #Monarch?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 16
            }
            ,
            {
                "Unit": "Militarists",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 50
            }
            ,
            {
                "Unit": "Militarists",
                "Variable": "Count",
                "Operator": ">",
                "Value": 100
            }
        ],
        "Decisions": [
            {
                "Option": "Succumb to Fascists. There is no hope!",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 1000
                    }
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 5
                    }

                ]
            },
            {
                "Option": "Plea for help from the masses of my nation. They must love their King!",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
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
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }

                ]
            },
            {
                "Option": "Gather my Nobles, Servants and foreign Allies to my defence.",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
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
                        "Unit": "Nobles",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 209,
        "Title": "Red Revolution on the horizon.",
        "Description": "The masses are angry and annoyed with your rule. The are about to storm the palace. There is not much we can do, as they number a great many! Save us, #MONARCH",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 16
            }
            ,
            {
                "Unit": "Farmers",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 50
            }
            ,
            {
                "Unit": "Workers",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 50
            }
            ,
            {
                "Unit": "Farmers",
                "Variable": "Count",
                "Operator": ">",
                "Value": 100
            }
            ,
            {
                "Unit": "Workers",
                "Variable": "Count",
                "Operator": ">",
                "Value": 100
            }
        ],
        "Decisions": [
            {
                "Option": "My Servants and Palace Guards should be enough to hold them!",
                "Effects": [
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
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
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 1000
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 1000
                    }
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 5
                    }

                ]
            },
            {
                "Option": "I, #MONARCH, was graced by God! My rule is just, and no peasantry may take it!",
                "Effects": [
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 15
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 100
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
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
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
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }

                ]
            },
            {
                "Option": "Gather my Nobles, Servants and foreign Allies to my defence.",
                "Effects": [
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
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
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
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
                        "Unit": "Nobles",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }


                ]
            }
        ]
    }
    ,
    {
        "ID": 209,
        "Title": "Constitutional Monarchy is modern Monarchy",
        "Description": " All around the world, monarchies are peacefully changed to republics or constitutional monarchies. You would still be the head of the state, just with some little concession to the mortals. Would you consider it, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 40
            }
        ],
        "Decisions": [
            {
                "Option": "Yes, that sounds like a sensible and fun idea!",
                "Effects": [
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 100
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
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
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
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 6
                    }

                ]
            },
            {
                "Option": "Are you kidding me? Get out.",
                "Effects": [
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 1
                    }

                ]
            },
            {
                "Option": "No, but I wish to improve the living standard of my subjects.",
                "Effects": [
                    {
                        "Unit": "Farmers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 1500
                    }

                ]
            }
        ]
    }
    ,
    {
        "ID": 210,
        "Title": "Public Welfare drains the treasury",
        "Description": "Year after year, your generous side has cost the treasure huge amounts of Balance. Soon it will be empty. What do we do?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 24
            }
            ,
            {
                "Unit": "Land",
                "Variable": "Balance",
                "Operator": "<",
                "Value": 2500
            }

        ],
        "Decisions": [
            {
                "Option": "Then reduce the welfare funds!",
                "Effects": [
                    {
                        "Unit": "Servants",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                        "Unit": "Farmers",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                        "Unit": "Workers",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                        "Unit": "Bureaucrats",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                        "Unit": "Academics",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                        "Unit": "Merchants",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                "Option": "Yes, but the welfare funds stay. Reduce Military spending and merchant subsidies.",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
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
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
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
                        "Unit": "Merchants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    }



                ]
            },
            {
                "Option": "Force the Nobles and the Merchants to subside new factories and plantations.",
                "Effects": [
                    {
                        "Unit": "Farmers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                ]
            }
        ]
    }
    ,
    {
        "ID": 211,
        "Title": "Great Gunboat Gang-Up",
        "Description": "Several Nations with modern navies are planning to bully a far east empire by bringing their ships to blockade the ports and enforce monetary and diplomatic demands. Shall we team up?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 16
            }

        ],
        "Decisions": [
            {
                "Option": "Never shall I team up with those dogs! Send the fleet to attack their fleets!",
                "Effects": [
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
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 4000
                    }
                    , {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 20
                    }

                ]
            },
            {
                "Option": "Yes,what a splendid idea! I love playing with ships.",
                "Effects": [
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
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
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 900
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }



                ]
            },
            {
                "Option": "I do not wish to bully less advanced nations. We stay out of this.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 20
                    }

                ]
            }
        ]
    }
    ,
    {
        "ID": 220,
        "Title": "Choose Side to support in foreign civil war.",
        "Description": "A neighbouring country is in turmoil and engAged in civil war. If we support one side and enable it to win the war, future relations can profit us.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 16
            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 50
            }
            ,
        ],
        "Decisions": [
            {
                "Option": "Support the loyalists!",
                "Effects": [
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2500
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                ]
            },
            {
                "Option": "Support the revolutionaries!",
                "Effects": [
                    {
                        "Unit": "Workers",
                        "Variable": "Diplomacy",
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
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2500
                    }
                    ,
                ]
            },
            {
                "Option": "Stay neutral.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 20
                    }

                ]
            }
        ]
    }
    ,
    {
        "ID": 221,
        "Title": "Rumors of Assassins.",
        "Description": "Several of our Agents report, that a alliance of political parties are preparing your assassination. We should act before they can strike. Your orders?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 24
            }
            ,
            {
                "Unit": "Clergy",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 80
            }
            ,
            {
                "Unit": "Academics",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 80
            }
            ,
            {
                "Unit": "Merchants",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 80
            }
            ,
            {
                "Unit": "Nobles",
                "Variable": "Mood",
                "Operator": "<",
                "Value": 80
            }
         ,
        ],
        "Decisions": [
            {
                "Option": "Hunt down those traitors! My rule is absolute!",
                "Effects": [
                    {
                        "Unit": "Nobles",
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
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2500
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Seriously? Who would want to kill me?",
                "Effects": [
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 1
                    }

                ]
            },
            {
                "Option": "Then I must change the way this state runs.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 3000
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
                        "Unit": "Merchants",
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
                        "Unit": "Clergy",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                ]
            }
        ]
    }
    ,
    {
        "ID": 222,
        "Title": "The State in debt",
        "Description": "Several of our Agents report, that a alliance of political parties are preparing your assassination. We should act before they can strike. Your orders?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 18
            }
            ,
            {
                "Unit": "Land",
                "Variable": "Balance",
                "Operator": "<",
                "Value": 0
            }


        ],
        "Decisions": [
            {
                "Option": "Lend Balance from Nobles and Merchants. I will repay.",
                "Effects": [
                    {
                        "Unit": "Nobles",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 30000
                    }
                ]
            },
            {
                "Option": "Tax the rabble even higher!",
                "Effects": [
                    {
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Unit": "Servants",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                ]
            },
            {
                "Option": "Then just raid those savages to the south!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 15000
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
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

                ]
            }
        ]
    }
    ,
    {
        "ID": 223,
        "Title": "Era of Decolonization",
        "Description": "The progress of civilization is not stoppable, and many colonial overlords release their former colonies as independent states. Should we do this?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 30
            }
            ,
            {
                "Unit": "Land",
                "Variable": "Colonies",
                "Operator": ">",
                "Value": 0
            }


        ],
        "Decisions": [
            {
                "Option": "Yes, but only release those that are unprofitable to us.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "-",
                        "Value": 2
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
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 3500
                    }
                ]
            },
            {
                "Option": "Okay, then do it. I don't want them anyway!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "-",
                        "Value": 20
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
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                ]
            },
            {
                "Option": "Never! My Empire shall last!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 25
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 4500
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
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
                "Option": "Rearrange the colonies to a commonwealth - with me as head of state!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 25000
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 450
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 450
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 250
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Colonies",
                        "Operator": "-",
                        "Value": 20
                    }

                ]
            }
        ]
    }
    ,
    {
        "ID": 224,
        "Title": "Veteran fights for decades",
        "Description": "News from a previous enemy country have arrived, telling us of a lone veteran still fighting after the last war. Our veteran. What do we do, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 40
            }

        ],
        "Decisions": [
            {
                "Option": "What do I care? He is nuts and not our problem.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
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
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Send his former commanding officer to convince him to give up the fight and return home.",
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
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 1
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                ]
            },
            {
                "Option": "Contact him via Letterbombs and tell him to come home!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
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
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                ]
            }
        ]
    }
    ,
    {
        "ID": 225,
        "Title": "Native Emigration ends in Massacre",
        "Description": "General Mustard intercepted natives on his own account, who where illegally migrating away from their designated reservate. What now, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 16
            }

        ],
        "Decisions": [
            {
                "Option": "Illegal Migrants are illegal migrants. Send reinforcements to mop up the survivors. Of both sides.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
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
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Pay both the families of the natives and soldiers a fine. This was a trAgedy.",
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
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2500
                    }


                ]
            },
            {
                "Option": "We need a different solution. The natives must be integrated into our society.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 3500
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 250
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 250
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 212,
        "Title": "Victors choose the Fate",
        "Description": "We and the other winners of the last war must decide what to do with the defeated belligerents. One plan is to partition and de-industrialize these nations. What is your stance on this?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 69
            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 71
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Yes, that sounds reasonable. Who would resent us in a couple of decades!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 20
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
                        "Unit": "Merchants",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }
                ]
            },
            {
                "Option": "This is irresponsible and near-sighted. We can not do this",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
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
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "On the contrary! We should help our former foes and rebuild them to a powerful ally!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 25000
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
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 150
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 150
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 150
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 213,
        "Title": "The Curtain of Cold Steel",
        "Description": "Our political enemies have formed a powerful Alliance, wielding considerable military and financial power. Should we erect a Wall at our Bordes?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 69
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
            ,
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 74
            }
        ],
        "Decisions": [
            {
                "Option": "No one has the intent to build a wall! But... do it. Quietly",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 50000
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 100
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 100
                    }
                ]
            },
            {
                "Option": "Yes! And increase our number of nuclear missiles and our standing army!",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 2000
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 40
                    }
                ]
            },
            {
                "Option": "We must open our eyes and hearts, not hide behind walls. Even if people leave our nation.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
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
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 150
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 150
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 150
                    }
                ]
            }
        ]
    },
    {
        "ID": 214,
        "Title": "Countries split by Ideology and War",
        "Description": "Several countries are entrenched in civil war - east versus west, north versus south. Each is backed by different ideologies and foreign power investment. Do we take part in this game of chess?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 70
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Yes, we will strike fear into our enemies by eliminating their junior allies.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 5000
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
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }
                ]
            },
            {
                "Option": "We will quietly support the enemy of our enemy.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 2000
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
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                ]
            },
            {
                "Option": "It is better to negotiate peace between both sides. It benefits all.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 30
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
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                ]
            }
            ,
            {
                "Option": "Offer to take any refugees. They can work in our great country.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
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
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }

                ]
            }
        ]
    }
    ,
    {
        "ID": 215,
        "Title": "Prepare for the Apocalypse",
        "Description": "The political situation is brooding. Nuclear war seems to be only moments away. Should we prepare?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 70
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Indeed. This engineer-corporation needs funds to build nuclear-proof, underground shelters for our people.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 24000
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Income",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Income",
                        "Operator": "-",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                ]
            },
            {
                "Option": "Nonsense. We will prevent any war.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 10
                    }

                ]
            },
            {
                "Option": "Only God may help us now. Let us pray.",
                "Effects": [
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 2
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 2
                    }


                ]
            }
        ]
    }
    ,
    {
        "ID": 216,
        "Title": "Red Alert",
        "Description": "Another Nation has panicked due to recent events and launched their missiles at an adversary. We are not targeted, but what may come now might not be survived by anybody. Your orders, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 70
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Let me press the red button.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 100000
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
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
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
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
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
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 2
                    }
                    ,
                ]
            },
            {
                "Option": "Get me the red telephone. Quick.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 15000
                    }
               ,
                ]
            },
            {
                "Option": "Get me my red comfy blanket...",
                "Effects": [
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 2
                    }
                    ,
                ]
            }
        ]
    }
    ,
    {
        "ID": 217,
        "Title": "Speech of Change",
        "Description": "The newly elected President of our greatest rival has shockingly reached out to us and other nations with hostile nations in an attempt at bringing peace to our world. What do we do now, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 72
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Yes. This silent war has frozen our hearts. Time to welcome the warmth.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 0
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
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
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "+",
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
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                ]
            },
            {
                "Option": "It's a Trap.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 300
                    }
               ,
                ]
            },
            {
                "Option": "Perfect. Plan the Assassination on our next Meeting.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 40
                    }
                    ,
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 3500
                    }
                    ,
                ]
            }
        ]
    }
    ,
    {
        "ID": 218,
        "Title": "Light the World on Fire.",
        "Description": "Our Enemies have decided to launch a full scale nuclear war upon us, as retaliation for our past crimes against them. What do we do now, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 72
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Shit.",
                "Effects": [
                    {
                        "Unit": "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 15000
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
                        "Value": 5
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
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
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
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
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Merchants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Mafia",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Nobles",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    }
                    ,
                    {
                        "Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 2
                    }
                    ,
                ]
            },
        ]
    }
    ,
    {
        "ID": 219,
        "Title": "Be sure to put flowers in your gun.",
        "Description": "In several of our major cities, peace protests have erupted, similar to all around the world. The hostilities, regional wars and arms races have demoralized the people. Our reaction, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 69
            }
            ,
            {
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 3
            }
        ],
        "Decisions": [
            {
                "Option": "Let the flower-stuffed gun barrels roar. No uprising is tolerated.",
                "Effects": [
                    {
                        "Unit": "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
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
                        "Operator": "+",
                        "Value": 250
                    }
                    ,
                    ,
                            {
                                "Unit": "Land",
                                "Variable": "Diplomacy",
                                "Operator": "-",
                                "Value": 10
                            }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 80
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 80
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 80
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Servants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 80
                    }


                ]
            }
            ,
            {
                "Option": "Support the activists and restructure the nation.",
                "Effects": [
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
                        "Value": 20
                    }
                    ,
                    {
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 2500
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
                        "Unit": "Academics",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Academics",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Unit": "Clergy",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Clergy",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Unit": "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Bureaucrats",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Unit": "Workers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
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
                        "Unit": "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    }
                    ,
                    {
                        "Unit": "Farmers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 1
                    }


                ]
            },
        ]
    }
];