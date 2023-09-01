ServerEvents.recipes(e => {
    //e.smelting('','',1.0,120)
    //coins
    e.smelting('minecraft:copper_ingot', 'coinsje:copper_coin_pile', 1.0, 120)
    e.smelting('minecraft:iron_ingot','coinsje:iron_coin_pile',1.0,120)
    e.smelting('minecraft:gold_ingot','coinsje:gold_coin_pile',1.0,120)
    e.smelting('minecraft:diamond','coinsje:diamond_coin_pile',1.0,120)
    e.smelting('minecraft:netherite_ingot','coinsje:netherite_coin_pile',1.0,120)
})