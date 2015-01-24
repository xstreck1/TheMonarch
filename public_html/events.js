Monarch.events = [
    {
        "ID": 2,
        "Title": "Foreign Archduke assassinated",
        "Description": "Great #MONARCH, never has a wrong turn had such disastrous effects! A foreign archduke has been assassinated by revolutionaries while taking a tour through one of the provinces. What shall we do now, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 36
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 0
            }
        ],
        "Decisions": [
            {
                "Option": "This means war! Pledge allegiance to country!",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 300
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 3
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 1
                    }
                ]
            },
            {
                "Option": "They where in the right! Pledge alleigance to revolutionaries.",
                "Effects": [
                                        {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 300
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 3
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 1
                    }
                ]
            },
            {
                "Option": "This could end in desaster. Try to negotiate.",
                "Effects": [
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Mood",
                        "Variable": "Militarists",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Mood",
                        "Variable": "Nobles",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 1
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 3,
        "Title": "The great war is over!",
        "Description": "Blood has been spilled and empires have fallen, but the great war is now at an end.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 37
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "Pay respects to the fallen.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 300
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Gain",
                        "Operator": "-",
                        "Value": 3
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 2
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
                    "Unit" : "Land",
                    "Variable": "EventChain",
                    "Operator": "=",
                    "Value": 0
                    }
                ]
            },
            {
                "Option": "Refuse to give up Prisoners of war.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 300
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Gain",
                        "Operator": "-",
                        "Value": 3
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 2
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 0
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 4,
        "Title": "Army encircled with a rival city",
        "Description": "Our army has been trapped in an enemy encirclement. The cannot hold out for long!",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 37
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "They must fight to the last man!",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 500
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 3
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    }
                ]
            },
            {
                "Option": "Enough of this Bloodshed. They must surrender.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 300
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Militarists",
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
        "ID": 5,
        "Title": "An exceptional soldier!",
        "Description": "One of our soldier strikes terror into the hearts of our enemies, by wheilding only a longbow and a claymore sword!",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 37
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "He shall recieve our highest honor!",
                "Effects": [
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Make him a duke and give him a horse to match!",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 1
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Make him use a gun like a normal person.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
			"Unit" : "Workers",
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
        "ID": 6,
        "Title": "We're surrounded",
        "Description": "#MONARCH, our enemies are closing in around us! what shall we do?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 37
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "Excellent, we can attack in any direction.",
                "Effects": [
                    {
			"Unit" : "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 4
                    }
                ]
            },
            {
                "Option": "Ask your allies for assistance",
                "Effects": [
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 1000
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 300
                    }
                ]
            },
            {
                "Option": "Enough blood has been shed. We surrender.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    }
                    ,
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Mafia",
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
        "ID": 7,
        "Title": "A bold strategy",
        "Description": "We may be able to smuggle TNT behind enemy lines and and cause a colossal explosion.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 37
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "Blow them up.",
                "Effects": [
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 200
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 1
                    },
                ]
            },
            {
                "Option": "It would be unsporting.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 1
                    },
                    {
			"Unit" : "Militarists",
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
        "ID": 8,
        "Title": "A strange strategy",
        "Description": "One of our generals suggests a weaponized blimp-squadron.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 27
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 37
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "A brilliant Idea! The enemy will never see us coming!",
                "Effects": [
                    {
			"Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 350
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 75
                    }
                ]
            },
            {
                "Option": "We will focus und fighter-planes instead",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 2
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 400
                    }
                ]
            },
            {
                "Option": "I think this general is better suited to be a farmer.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 1
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 1
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 100
                    }
                ]
            }
        ]
    }
    ,
    {
        "ID": 9,
        "Title": "Our army meets the enemy army.",
        "Description": "Honourable #MONARCH, our army is to meet the enemy in open battle. How do we engage?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit": "Monarch",
                "Variable": "age",
                "Operator": "<",
                "Value": 36
            }
			,
			{
                "Unit": "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 1
            }
        ],
        "Decisions": [
            {
                "Option": "I will lead our army personally! To Victory!",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 20
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
                        "Unit": "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
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
                        "Unit": "Nobles",
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
                        "Unit": "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                    ,
                    {
                        "Unit": "Servants",
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
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 1200
                    }
                    ,
                    {
        		"Unit": "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 4						
                    }		
                ]
            },
            {
                "Option": "I wish to meet the enemy commander and negotiate.",
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
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Pound them with artillery and then a frontal assault!",
                "Effects": [
                    {
                        "Unit": "Militarists",
                        "Variable": "Mood",
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
                        "Unit": "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    }
                ]
            }
        ]
    }
	,
        {
	"ID": 13,
        "Title": "Poor construction work",
        "Description": "A great monument has been built in your honour, great #MONARCH. However, due to poor construction work it has begun leaning to one side!",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "age",
                "Operator": ">",
                "Value": 25
            },
            {
        	"Unit" : "Monarch",
                "Variable": "balance",
                "Operator": ">",
                "Value": 2000
            }
        ],
        "Decisions": [
            {
                "Option": "Punish the workers by raising their taxes.",
                "Effects": [
                    {
                        "Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 30
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 250
                    }
                ]
            },
            {
                "Option": "Consult Academics on this strange occurrence.",
                "Effects": [
                    {
                        "Unit" : "Academics",
                        "Variable": "mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "count",
                        "Operator": "+",
                        "Value": 10
                    }
                ]
            }
        ]
    }
	,
	{
	"ID": 14,
        "Title": "Measurement Problems",
        "Description": "Years of research and money have gone to waste, because the researchers could not agree on a system of measurements. What will you do, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "age",
                "Operator": ">",
                "Value": 16
            }
        ],
        "Decisions": [
            {
                "Option": "Scrap the experiment and fire the researchers.",
                "Effects": [
                    {
                        "Unit" : "Academics",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Declare the Imperial system the standard measurement system.",
                "Effects": [
                    {
                        "Unit" : "Nobles",
                        "Variable": "mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "mood",
                        "Operator": "+",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Declare the Metric system the standard measurement system.",
                "Effects": [
                    {
                        "Unit" : "Workers",
                        "Variable": "mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "mood",
                        "Operator": "+",
                        "Value": 5
                    }
                ]
            }
        ]
    }
        ,
        {
	"ID": 15,
        "Title": "Drug Smuggling",
        "Description": "A ship carrying a large amount of drugs has been sighted near our shoreline. How shall we proceed, #MONARCH?",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "age",
                "Operator": ">",
                "Value": 16
            }
        ],
        "Decisions": [
            {
                "Option": "Make an example! Blow it out of the water.",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Mafia",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Capture the ship and secretly distribute the drugs yourself.",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "balance",
                        "Operator": "+",
                        "Value": 500
                    }
                ]
            },
            {
                "Option": "Allow the ship to proceed unhindered.",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "mood",
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 3
                    }
                ]
            }
        ]
    }
        ,
        {
	"ID": 16,
        "Title": "Education",
        "Description": "#MONARCH, there is a general decilne in the populations education.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "age",
                "Operator": ">",
                "Value": 20
            },
            {
                "Unit" : "Land",
                "Variable": "Balance",
                "Operator": ">",
                "Value": 750
            }
        ],
        "Decisions": [
            {
                "Option": "Everything is fine as it is.",
                "Effects": [
                    {
                        "Unit" : "Academics",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 30
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "Gain",
                        "Operator": "-",
                        "Value": 2
                    }
                ]
            },
            {
                    "Option": "Make education cumpulsory.",
                "Effects": [
                    {
                        "Unit" : "Academics",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 30
                    },
                    {
			"Unit" : "Academics",
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
	"ID": 17,
        "Title": "Flagship sinks in Harbor!",
        "Description": "Our generals insisted on too many cannons, against the workers better judgement. The ship never even made it to open sea.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "age",
                "Operator": ">",
                "Value": 20
            },
            {
                "Unit" : "Land",
                "Variable": "Balance",
                "Operator": ">",
                "Value": 500
            }
        ],
        "Decisions": [
            {
                "Option": "Oooops... Do nothing.",
                "Effects": [
                    {
                        "Unit" : "Military",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Order an even bigger ship.",
                "Effects": [
                    {
                        "Unit" : "Military",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }
                ]
            },
            {
                "Option": "Have the General procecuted.",
                "Effects": [
                    {
                        "Unit" : "Military",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 20
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Gain",
                        "Operator": "+",
                        "Value": 2
                    }
                ]
            }
        ]
    }
];