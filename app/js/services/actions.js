(function () {
    'use strict';

    var allClasses = [
        "Alchemist",
        "Armorer",
        "Blacksmith",
        "Carpenter",
        "Culinarian",
        "Goldsmith",
        "Leatherworker",
        "Weaver"
    ];

    var extraActionInfo = {
        basicSynth: {},
        standardSynthesis: {},
        flawlessSynthesis: {},
        carefulSynthesis: {},
        carefulSynthesis2: {},
        pieceByPiece: {},
        rapidSynthesis: {},
        basicTouch: {},
        standardTouch: {},
        advancedTouch: {},
        hastyTouch: {},
        byregotsBlessing: {
            common: true,
        },
        comfortZone: {
            buff: true
        },
        rumination: {},
        mastersMend: {
            common: true
        },
        mastersMend2: {
            common: true
        },
        wasteNot: {
            buff: true
        },
        wasteNot2: {
            buff: true
        },
        manipulation: {
            buff: true
        },
        innerQuiet: {
            common: true,
            buff: true
        },
        steadyHand: {
            common: true,
            buff: true
        },
        steadyHand2: {
            common: true,
            buff: true
        },
        ingenuity: {
            buff: true
        },
        ingenuity2: {
            buff: true
        },
        greatStrides: {
            common: true,
            buff: true
        },
        innovation: {
            buff: true
        },
        tricksOfTheTrade: {},

        // Heavensward
        preciseTouch: {},
        makersMark: {},
        muscleMemory: {},

        // Specialist
        innovativeTouch: {
            common: true
        },
        byregotsMiracle: {
            common: true
        },
        brandOfTheElements: {
            common: true,

        },
        nameOfTheElements: {
            common: true,
            buff: true
        },
        hastyTouch2: {
            common: true
        },
        carefulSynthesis3: {
            common: true
        },
        rapidSynthesis2: {
            common: true
        },
        patientTouch: {},
        manipulation2: {
            common: true,
            buff: true
        },
        prudentTouch: {},
        focusedSynthesis: {},
        focusedTouch: {},
        initialPreparations: {
            common: true
        },
        specialtyReinforce: {
            common: true
        },
        specialtyRefurbish: {
            common: true
        },
        specialtyReflect: {
            common: true
        },
        strokeOfGenius: {
            common: true,
            buff: true
        },

        // Stormblood
        hastyTouch2: {
            common: true
        },
        carefulSynthesis3: {
            common: true
        },
        rapidSynthesis2: {
            common: true
        },
        patientTouch: {},
        manipulation2: {
            common: true,
            buff: true
        },
        prudentTouch: {},
        focusedSynthesis: {},
        focusedTouch: {},
        initialPreparations: {
            common: true
        },
        specialtyReinforce: {
            common: true
        },
        specialtyRefurbish: {
            common: true
        },
        specialtyReflect: {
            common: true
        },
        strokeOfGenius: {
            common: true,
            buff: true
        },

        // Shadowbringers
        preparatoryTouch: {
            common: true
        },
        rapidSynthesis3: {
            common: true
        },
        delicateSynthesis: {
            common: true
        },
        intensiveSynthesis: {
            common: true
        },
        observe: {
            common: true
        }

        // Reclaim is omitted because it has no bearing on the success of the result of the synthesis, as far as we care.
    };

    var obsoleteActions = {
        byregotsBrow: true,
        brandOfEarth: true,
        brandOfFire: true,
        brandOfIce: true,
        brandOfLightning: true,
        brandOfWater: true,
        brandOfWind: true,
        nameOfEarth: true,
        nameOfFire: true,
        nameOfIce: true,
        nameOfLightning: true,
        nameOfWater: true,
        nameOfWind: true,
    };

    var actionsByName = {};
    var allActions = [];

    for (var shortName in extraActionInfo) {
        if (extraActionInfo.hasOwnProperty(shortName)) {
            var extraInfo = extraActionInfo[shortName];
            var action = AllActions[shortName];

            action.buff = extraInfo.buff;
            var imagePaths = {};
            for (var j = 0; j < allClasses.length; j++) {
                var cls = allClasses[j];
                if (action.cls === 'All') {
                    if (extraInfo.common) {
                        imagePaths[cls] = 'img/actions/' + shortName + '.png';
                    } else {
                        imagePaths[cls] = 'img/actions/' + cls + '/' + shortName + '.png';
                    }
                } else {
                    imagePaths[cls] = 'img/actions/' + action.cls + '/' + shortName + '.png';
                }
                action.imagePaths = imagePaths;
            }

            actionsByName[shortName] = action;
            allActions.push(action);
        }
    }

    var actionGroups = [
        {
            name: "Synthesis", actions: [
                "basicSynth",
                "standardSynthesis",
                "flawlessSynthesis",
                "carefulSynthesis",
                "carefulSynthesis2",
                "carefulSynthesis3",
                "pieceByPiece",
                "rapidSynthesis",
                "rapidSynthesis2",
                "rapidSynthesis3",
                "focusedSynthesis",
                "delicateSynthesis",
                "intensiveSynthesis",
                "muscleMemory",
                "brandOfTheElements"
            ]
        },
        {
            name: "Quality", actions: [
                "basicTouch",
                "standardTouch",
                "advancedTouch",
                "hastyTouch",
                "hastyTouch2",
                "byregotsBlessing",
                "preciseTouch",
                "focusedTouch",
                "patientTouch",
                "prudentTouch",
                "preparatoryTouch"
            ]
        },
        {
            name: "CP", actions: [
                "comfortZone",
                "rumination",
                "tricksOfTheTrade"
            ]
        },
        {
            name: "Durability", actions: [
                "mastersMend",
                "mastersMend2",
                "wasteNot",
                "wasteNot2",
                "manipulation",
                "manipulation2"
            ]
        },
        {
            name: "Buffs", actions: [
                "innerQuiet",
                "steadyHand",
                "steadyHand2",
                "ingenuity",
                "ingenuity2",
                "greatStrides",
                "innovation",
                "makersMark",
                "initialPreparations",
                "nameOfTheElements"
            ]
        },
        {
            name: "Specialist", actions: [
                "innovativeTouch",
                "byregotsMiracle",
                "specialtyReinforce",
                "specialtyRefurbish",
                "specialtyReflect"
            ]
        },
        {
            name: "Other", actions: [
                "observe"
            ]
        }
    ];

    function getActionImagePath(action, cls) {
        if (!angular.isDefined(action)) {
            console.error('undefined action param');
            return 'img/actions/unknown.svg';
        }
        var info = actionsByName[action];
        if (!angular.isDefined(info)) {
            if (!obsoleteActions[action])
                console.error('unknown action: %s', action);
            return 'img/actions/unknown.svg';
        }
        return info.imagePaths[cls];
    }

    function iActionClassSpecific(name) {
        if (!angular.isDefined(name)) {
            console.error('undefined action');
            return false;
        }
        var info = actionsByName[name];
        if (!angular.isDefined(info)) {
            if (!obsoleteActions[name])
                console.error('unknown action: %s', name);
            return false;
        }
        return info.cls !== 'All';
    }

    function isActionCrossClass(name, currentClass) {
        if (!angular.isDefined(name)) {
            console.error('undefined action');
            return false;
        }
        var info = actionsByName[name];
        if (!angular.isDefined(info)) {
            if (!obsoleteActions[action])
                console.error('unknown action: %s', name);
            return false;
        }
        return info.cls !== 'All' && info.cls !== currentClass;
    }

    angular.module('ffxivCraftOptWeb.services.actions', []).value('_allClasses', allClasses).value('_allActions', allActions).value('_actionsByName', actionsByName).value('_actionGroups', actionGroups).value('_getActionImagePath', getActionImagePath).value('_iActionClassSpecific', iActionClassSpecific).value('_isActionCrossClass', isActionCrossClass);

})();
