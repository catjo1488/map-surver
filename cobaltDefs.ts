import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";

const mapDef: PartialMapDef = {
    mapId: MapId.Cobalt,
    desc: {
        name: "Cobalt",
        icon: "img/gui/cobalt.svg",
        buttonCss: "btn-mode-cobalt",
        backgroundImg: "img/main_splash_cobalt.png",
    },
    assets: {
        audio: [
            { name: "spawn_01", channel: "ui" },
            { name: "ping_unlock_01", channel: "ui" },
            { name: "ambient_lab_01", channel: "ambient" },
            { name: "log_13", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
            { name: "log_01",channel: "sfx"},
            { name: "log_02",channel: "sfx"},
            { name: "pumpkin_break_01",channel: "sfx"},
            { name: "vault_change_02",channel: "sfx"},
            { name: "kill_leader_assigned_01",channel: "ui"},
            { name: "kill_leader_assigned_02",channel: "ui"},
            { name: "kill_leader_dead_01",channel: "ui"},
            { name: "kill_leader_dead_02",channel: "ui"},
            { name: "trick_01",channel: "ui"},
            { name: "trick_02",channel: "ui"},
            { name: "trick_03",channel: "ui"},
            { name: "treat_01",channel: "ui"},
            { name: "xp_pickup_01",channel: "ui"},
            { name: "xp_pickup_02",channel: "ui"},
            { name: "xp_drop_01",channel: "sfx"},
            { name: "xp_drop_02",channel: "sfx"},
            { name: "footstep_08", channel: "sfx" },
            { name: "footstep_09", channel: "sfx" },
            { name: "helmet03_forest_pickup_01", channel: "ui"},
        ],
        atlases: ["gradient", "loadout", "shared", "cobalt","halloween","woods"],
    },
    biome: {
        colors: {
            background: 0x20e18,
            water: 0x3571,
            beach: 0x684836,
            riverbank: 0x443d3a,
            grass: 0x212404,
            underground: 0x1b0d03,
            playerSubmerge: 0x123049,
            playerGhillie: 0x4b5866,
        },
        particles: {},
    },
    gameConfig: {
        planes: {
            crates: [
                { name: "class_shell_02", weight: 10 },
                { name: "class_shell_03", weight: 1 },
            ],
        },
        unlocks: {
            timings: [
                {
                    type: "bunker_twins_sublevel_01",
                    stagger: 0.2,
                    circleIdx: 2,
                    wait: 5,
                },
            ],
        },
    },
    lootTable: {
        // disable outfits from spawning
        tier_outfits: [
            { name: "class_shell_02", weight: 10 },
                { name: "class_shell_03", weight: 1 },
        ],
        tier_mansion_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_vault_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_police_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_conch: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_noir_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_khaki_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_islander_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_imperial_outfit: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_club_melee: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_airdrop_outfits: [{ name: "outfitGhillie", count: 1, weight: 1 }],
        tier_guns: [
            { name: "dp28", count: 1, weight: 3.5 },
            { name: "m1100", count: 1, weight: 3 },
            { name: "mp220", count: 1, weight: 1.5 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "spas12", count: 1, weight: 3 },
            { name: "qbb97", count: 1, weight: 0.1 },
            { name: "bar", count: 1, weight: 3 },
            { name: "pkp", count: 1, weight: 0.005 },
            { name: "m249", count: 1, weight: 0.008 },
        ],
        tier_ammo: [
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 6 },
            { name: "12gauge", count: 10, weight: 1 },
        ],
        tier_ammo_crate: [
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 6 },
            { name: "12gauge", count: 10, weight: 1 },
        ],
        tier_throwables: [
            { name: "frag", count: 3, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "smoke", count: 1, weight: 1 },
            { name: "strobe", count: 1, weight: 0.2 },
        ],
        tier_armor: [
            { name: "helmet01", count: 1, weight: 3 },
            { name: "helmet02", count: 1, weight: 2 },
            { name: "helmet03", count: 1, weight: 1 },
            { name: "chest01", count: 1, weight: 3 },
            { name: "chest02", count: 1, weight: 2 },
            { name: "chest03", count: 1, weight: 1 },
        ],
        tier_packs: [
            { name: "backpack01", count: 1, weight: 3 },
            { name: "backpack02", count: 1, weight: 2 },
            { name: "backpack03", count: 1, weight: 1 },
        ],
        tier_chest: [
            { name: "dp28", count: 1, weight: 0.5 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "spas12", count: 1, weight: 1 },
            { name: "qbb97", count: 1, weight: 0.1 },
            { name: "bar", count: 1, weight: 1 },
            { name: "helmet03", count: 1, weight: 1 },
            { name: "chest03", count: 1, weight: 1 },
            { name: "4xscope", count: 1, weight: 1 },
            { name: "8xscope", count: 1, weight: 0.5 },
            { name: "pkp", count: 1, weight: 0.05 },
            { name: "m249", count: 1, weight: 0.05 },
        ],
        tier_airdrop_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "strobe", count: 1, weight: 0.5 },
        ],
        tier_airdrop_uncommon: [
            { name: "mirv", count: 8, weight: 1 },
            { name: "strobe", count: 2, weight: 0.5 },
            { name: "saiga", count: 1, weight: 1 },
            { name: "qbb97", count: 1, weight: 2 },
        ],
        tier_airdrop_rare: [
            { name: "usas", count: 1, weight: 2 },
            { name: "pkp", count: 1, weight: 0.08 },
            { name: "m249", count: 1, weight: 1 },
            { name: "m9", count: 1, weight: 0.005 },
        ],
        tier_airdrop_ammo: [
            { name: "762mm", count: 30, weight: 3 },
            { name: "556mm", count: 30, weight: 3 },
            { name: "12gauge", count: 5, weight: 3 },
        ],
        tier_hatchet: [
            { name: "usas", count: 1, weight: 2 },
            { name: "pkp", count: 1, weight: 0.08 },
            { name: "m249", count: 1, weight: 1 },
        ],
        tier_airdrop_melee: [
            { name: "", count: 1, weight: 19 },
            { name: "stonehammer", count: 1, weight: 1 },
            { name: "pan", count: 1, weight: 1 },
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    mapGen: {
        map: {
            rivers: {
                weights: [
                    // apparently cobalt only had this fixed amount of widths?
                    // I deserialized a bunch of map msgs and couldn't find a different one
                    { weight: 1, widths: [16, 14, 12, 10, 8, 6, 4] },
                ],
                spawnCabins: false,
                masks: [
                    {
                        pos: v2.create(0.5, 0.5),
                        rad: 100,
                    },
                    {
                        rad: 100,
                        genOnShore: true,
                    },
                    {
                        rad: 100,
                        genOnShore: true,
                    },
                ],
                
            },
        },
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "logging_complex_01",
                    pos: v2.create(0.5, 0.5),
                    rad: 200,
                    retryOnFailure: true,
                },
            ],
        },
        densitySpawns: [
            {
                stone_01cb: 350,
                barrel_01: 76,
                silo_01: 8,

                crate_03: 8,
                bush_01cb: 78,
                cache_06: 12,
                tree_01cb: 320,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                stone_01: 125,
                crate_01: 120,
                crate_02: 6,
                bush_01: 90,
                hedgehog_01: 12,
                cache_pumpkin_01: 1,
                cache_pumpkin_03: 42,
                loot_tier_1: 48,
                loot_tier_beach: 8,
                
            },
        ],
        fixedSpawns: [
            {
                bunker_structure_09: 1,
                warehouse_01: 2,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 3,
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                cache_01cb: 1,
                cache_02cb: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                warehouse_complex_01: 1,
                chest_01cb: 1,
                chest_03cb: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                tree_05: 42,
                tree_07: 500,
                tree_08: 100,
                tree_09: 36,
                stone_04: 1,
                club_complex_01: 1,
                class_shell_01: 40,
                cache_log_13: 1, // recorder crate
            },
        ],
        spawnReplacements: [
            {
                tree_01: "tree_01cb",
                stone_01: "stone_01cb",
                bush_01: "bush_01cb",
                bush_04: "bush_04cb",
                stone_03: "stone_01",
                cabin_01: "cabin_02",
                crate_02: "crate_19",
                crate_08: "crate_19",
                crate_09: "crate_19",
                
            },
        ],
        importantSpawns: [
            "club_complex_01",
            "warehouse_complex_01",
            "logging_complex_01",
            
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
    gameMode: {
        maxPlayers: 80,
        perkMode: true,
        perkModeRoles: ["scout", "sniper", "healer", "demo", "assault", "tank"],
    },
};

export const Cobalt = util.mergeDeep({}, Main, mapDef);
