ServerEvents.recipes(e => {
    //coins
    e.remove({type: 'minecraft:smelting', output: 'coinsje:copper_coin'})
    e.remove({type: 'minecraft:blasting', output: 'coinsje:copper_coin'})
    e.remove({type: 'minecraft:smelting', output: 'coinsje:iron_coin'})
    e.remove({type: 'minecraft:blasting', output: 'coinsje:iron_coin'})
    e.remove({type: 'minecraft:smelting', output: 'coinsje:gold_coin'})
    e.remove({type: 'minecraft:blasting', output: 'coinsje:gold_coin'})
    e.remove({type: 'minecraft:smelting', output: 'coinsje:diamond_coin'})
    e.remove({type: 'minecraft:blasting', output: 'coinsje:diamond_coin'})
    e.remove({type: 'minecraft:smelting', output: 'coinsje:netherite_coin'})
    e.remove({type: 'minecraft:blasting', output: 'coinsje:netherite_coin'})
    //end of coins

    //sophisticated backpacks
    e.remove({output: 'sophisticatedbackpacks:upgrade_base'})
    e.remove({output: 'sophisticatedbackpacks:inception_upgrade'})
    //end

    //createadditions
    e.remove({})
})