ServerEvents.recipes(e => {
    //e.custom({type: 'minecraft:smithing_transform',base: {item: ''},addition: {item: ''},template:  {item: ''},result:  {item: ''}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'sophisticatedbackpacks:backpack'},addition: {item: 'minecraft:iron_ingot'},template:  {item: 'coinsje:iron_coin'},result:  {item: 'sophisticatedbackpacks:iron_backpack'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'sophisticatedbackpacks:iron_backpack'},addition: {item: 'minecraft:gold_ingot'},template:  {item: 'coinsje:gold_coin'},result:  {item: 'sophisticatedbackpacks:gold_backpack'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'sophisticatedbackpacks:gold_backpack'},addition: {item: 'minecraft:diamond'},template:  {item: 'coinsje:diamond_coin'},result:  {item: 'sophisticatedbackpacks:diamond_backpack'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'sophisticatedbackpacks:diamond_backpack'},addition: {item: 'minecraft:netherite_ingot'},template:  {item: 'coinsje:netherite_coin'},result:  {item: 'sophisticatedbackpacks:netherite_backpack'}})
})