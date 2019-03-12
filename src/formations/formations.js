const formations = [
    {
        label: "Glider",
        pattern: `x = 3, y = 3, rule = B3/S23
        bob$2bo$3o!`
    },
    {
        label: "Rats",
        pattern: `x = 12, y = 11, rule = B3/S23
        5b2o5b$6bo5b$4bo7b$2obob4o3b$2obo5bobo$3bo2b3ob2o$3bo4bo3b$4b3obo3b$7bo4b$6bo5b$6b2o!`
    },
    {
        label: "Gosper glider gun",
        pattern: `x = 36, y = 9, rule = B3/S23
        24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8bo3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!`
    },
    {
        label: "8-engine Cordership",
        pattern: `x = 83, y = 83, rule = B3/S23
        46bo$41bo2bobo2bo3bo$41bo4b2ob5o$41bo3bo4bobo2$43b3o$44bo18b2o$63b2o6$51bo$50bobo18b2o$31bo18bo2bo17b2o$31bo19b2o$31bo$35bo11b2o$31b3o2bo10b2o$30bo4bo$30bo3bo$31b3o$40b2o$37b2ob2o$30bobo$30bobo30bobo6bobo$30bobo29bo9bobo$30bobo30bo2bo6bo$31b2o32b3o$20b2o3b4o$15b3obo2bo6bo$19bo2bo2b5o$19bo2bo$21bo$18bobo33bo$19bo33bobo$24bo$24bo28bo2bo$55b2o$23b2o31bo$b3o19b2o2$5bo75bo$bo3b2o74b2o$3bobo47b2o27bo$3o52bo25bo$2bo15b2o33b2o$18b2o$b2o$2b2o10b2o$2bo10bo2bo$2b2o10bobo$b2o12bo20bobo6bobo$35bo9bobo22b2obo$36bo2bo6bo24b2o$38b3o6$27bo$6b2o18bobo$6b2o$26bo2bo$28b2o$29bo3$54bo$14b2o38b2o$14b2o10b2o27bo$28bo25bo$26b2o7$43b2obo$44b2o!`  
    },
    {
        label: "Glider-producing switch engine",
        pattern: `x = 67, y = 60, rule = 23/3
        bo65b$bo65b$bo65b$5bo61b$b3o2bo60b$o4bo61b$o3bo62b$b3o63b$15b2o50b$13b2o2bo49b$obo10b2o3bo48b$obo10b2o52b$obo64b$obo17bo46b$b2o14bo49b3$22bo2bo41b$26bo40b$22bo10b2o32b$26bo6b2o32b$22b4o41b$21bo45b$22b2o43b$23bo43b3$41b2o24b$41b2o24b3$13b2o52b$13b2o52b5$36b2o29b$36b3o9b2o17b$37bo10bobo16b$49bo17b$33bo33b$27bo5bo33b$26bobo11b3o24b$26bo2bo9bob2o24b$16b2o9b2o10b2o26b$15bo2bo48b$15b2ob2o47b$18bobo46b$20b2o45b$17bo3bo45b$17bo2bo44b2o$18b3o44b2o3$54bo12b$53bobo11b$40bo12b2o12b$39bobo25b$39b2o!`
    },
    {
        label: "100 cell row",
        pattern: `x = 100, y = 1, rule = B3/S23
        100o!`
    },

];

export default formations;