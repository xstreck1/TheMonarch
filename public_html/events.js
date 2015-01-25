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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
        "Title": "Army encircled in a rival city",
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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
                        "Variable": "Deplomacy",
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
        "Description": "One of our generals suggests a weaponized zeppelin-squadron.",
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
                        "Variable": "Deplomacy",
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
                "Value": 16
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
                "Value": 16
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
                "Value": 16
            }
        ],
        "Decisions": [
            {
                "Option": "Oooops... Do nothing.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Deplomacy",
                        "Operator": "-",
                        "Value": 5
                    }
                ]
            },
            {
                "Option": "Order an even bigger ship.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Deplomacy",
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
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 20
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Deplomacy",
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
    ,
    {
	"ID": 20,
        "Title": "Market Crash",
        "Description": "#MONARCH, the markets have crashed and crime is rampant in the street. The people are calling this the great depression.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 41
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 48
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
                "Option": "Alcohol must be the cause of is! Prohibit the vile substance!",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 300
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 250
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
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
                        "Operator": "+",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 4
                    }
                ]
            },
            {
                "Option": "Wage a war on corruption, oust anyone you don't trust.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Workers",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Servants",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "count",
                        "Operator": "-",
                        "Value": 50
                    },
                    {
			"Unit" : "Land",
                        "Variable": "EventChain",
                        "Operator": "=",
                        "Value": 4
                    }
                    
                ]
            }
        ]
    }
    ,
    {
	"ID": 21,
        "Title": "Market back on the climb",
        "Description": "The Market has finally stabalized. The streets have been dangerous for the past years, but things are finally looking up again.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 41
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 49
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 4
            }
        ],
        "Decisions": [
            {
                "Option": "We should celebrate that fact with a beer!",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 300
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 250
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Servants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "Mood",
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
            },
            {
                "Option": "Alcohol should still be forbidden.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Servants",
                        "Variable": "mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "mood",
                        "Operator": "+",
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
	"ID": 22,
        "Title": "A Black day indeed.",
        "Description": "A wave of suicides has swept the land, as many find themselves unable to deal with the sudden loss of money.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 41
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 49
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 4
            }
        ],
        "Decisions": [
            {
                "Option": "We must invest, get the flow of money going again!",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 25
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 1000
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Let the Market sort it self out. This will take as long as it has to.",
                "Effects": [
                    {
			"Unit" : "Workers",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 50
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 100
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 25
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 30
                    }
                ]
            }
        ]
    }
    ,
    {
	"ID": 23,
        "Title": "Excentric Gangster Couple",
        "Description": "For the thrid time a two gangsters, a man and a woman, managed to rob a bank and evade the police, inguring several officers in the progress.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 41
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 49
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 4
            }
        ],
        "Decisions": [
            {
                "Option": "Throw everything we have at them!",
                "Effects": [
                    {
                        "Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 25
                    },
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 25
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 250
                    }
                ]
            },
            {
                "Option": "Attempt to lure them into a trap.",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 250
                    }
                ]
            }
        ]
    }
    ,
    {
	"ID": 24,
        "Title": "Corruption and Bribary",
        "Description": "Rumours of corruption and bribary are spreading. The populus is becoming restless.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 41
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 49
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 4
            }
        ],
        "Decisions": [
            {
                "Option": "Rediuculous. They're not bribes, they're gifts.",
                "Effects": [
                    {
                        "Unit" : "Monarch",
                        "Variable": "GameOver",
                        "Operator": "=",
                        "Value": 3
                    }
                ]
            },
            {
                "Option": "These are serious acusations. We must act acordingly.",
                "Effects": [
                    {
			"Unit" : "Mafia",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "Income",
                        "Operator": "-",
                        "Value": 3
                    },
                    {
			"Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 250
                    }
                ]
            }
        ]
    }
    ,
    {
	"ID": 25,
        "Title": "High Taxes",
        "Description": "The Population is protesting against the high taxes. They find them unjust in these hard times.",
        "FunFact": "fun_fact",
        "Conditions": [
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": ">",
                "Value": 41
            },
            {
                "Unit" : "Monarch",
                "Variable": "Age",
                "Operator": "<",
                "Value": 49
            },
            {
                "Unit" : "Land",
                "Variable": "EventChain",
                "Operator": "==",
                "Value": 4
            }
        ],
        "Decisions": [
            {
                "Option": "Lower Taxes",
                "Effects": [
                    {
			"Unit" : "Militarists",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Workers",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Servants",
                        "Variable": "Pay",
                        "Operator": "+",
                        "Value": 5
                    },
                    {
			"Unit" : "Mafia",
                        "Variable": "Pay",
                        "Operator": "-",
                        "Value": 15
                    }
                ]
            },
            {
                "Option": "Raise Taxes.",
                "Effects": [
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 250
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                    ,
                    {
			"Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
			"Unit" : "Servants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Keep Taxes as they are.",
                "Effects": [
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "+",
                        "Value": 100
                    },
                    {
			"Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
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
                    }
                ]
            }
        ]
    }
    ,
    {
	"ID": 30,
        "Title": "Psychic Warfare",
        "Description": "Great #MONARCH, one of your Generals has requested funding, in order to research psychic warfare. Walking through walls would give us a definite advantage in Battle, he says.",
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
                "Option": "A promising Project! Pay him what he wants.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 2
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 750
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 1
                    }
                ]
            },
            {
                "Option": "Let's just focus on regular weapons technology for now.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Income",
                        "Operator": "+",
                        "Value": 1
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 250
                    }
                ]
            },
            {
                "Option": "Use a cannon to fire the general through a wall.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
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
	"ID": 31,
        "Title": "Religious uproar.",
        "Description": "A konservative and a progressive religous faction are vying for the popolus' beliefs. Conflicts are beginning to escalate.",
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
                "Option": "Support the konservative faction.",
                "Effects": [
                    {
                        "Unit" : "Clergy",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    },
                    {
                        "Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    },
                    {
                        "Unit" : "Nobels",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Mafia",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Support the progressive Faction",
                "Effects": [
                    {
                        "Unit" : "Clergy",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 50
                    },
                    {
                        "Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    },
                    {
                        "Unit" : "Merchants",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    },
                    {
                        "Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Abolish religion.",
                "Effects": [
                    {
                        "Unit" : "Clergy",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 200
                    },
                    {
                        "Unit" : "Clergy",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 50
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Nobels",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Mafia",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            }
        ]
    }
    ,
    {
	"ID": 32,
        "Title": "Minister in Trouble.",
        "Description": "One of our Ministers and a close fried of yours has a reputation for getting too drunk for even the most lenient bars and to devulge state secrets when intoxicated.",
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
                "Option": "We must make an example. Execute him.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    },
                    {
                        "Unit" : "Mafia",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "My friends can do as the please.",
                "Effects": [
                    {
                        "Unit" : "Bureaucrats",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Farmers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Nobles",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Merchants",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 10
                    },
                    {
                        "Unit" : "Mafia",
                        "Variable": "Mood",
                        "Operator": "+",
                        "Value": 10
                    }
                ]
            },
            {
                "Option": "Strip him of his rank and buy him a house on an isolated island.",
                "Effects": [
                    {
                        "Unit" : "Land",
                        "Variable": "Balance",
                        "Operator": "-",
                        "Value": 150
                    },
                    {
                        "Unit" : "Academics",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
                        "Unit" : "Workers",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
                        "Unit" : "Nobels",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 5
                    },
                    {
                        "Unit" : "Mafia",
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
                        "Unit" : "Bureaucrats",
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
	"ID": 33,
        "Title": "Civil War in a neighbouring country",
        "Description": "Republicans and Nationalists are both vying for power in a neighbouring country. They have both requested your support.",
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
                "Option": "Support the Republicans.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 150
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
                        "Value": 250
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
                "Option": "Support the Nationalists",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Count",
                        "Operator": "+",
                        "Value": 150
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
                        "Value": 250
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
                "Option": "Stay out of this.",
                "Effects": [
                    {
                        "Unit" : "Militarists",
                        "Variable": "Mood",
                        "Operator": "-",
                        "Value": 15
                    },
                    {
                        "Unit" : "Land",
                        "Variable": "Diplomacy",
                        "Operator": "-",
                        "Value": 15
                    }
                ]
            }
        ]
    }
];