ServerEvents.recipes(e => {
    //armor
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:leather_helmet'},addition: {item: 'minecraft:chain'},template:  {item: 'coinsje:copper_coin'},result:  {item: 'minecraft:chainmail_helmet'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:leather_chestplate'},addition: {item: 'minecraft:chain'},template:  {item: 'coinsje:copper_coin'},result:  {item: 'minecraft:chainmail_chestplate'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:leather_leggings'},addition: {item: 'minecraft:chain'},template:  {item: 'coinsje:copper_coin'},result:  {item: 'minecraft:chainmail_leggings'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:leather_boots'},addition: {item: 'minecraft:chain'},template:  {item: 'coinsje:copper_coin'},result:  {item: 'minecraft:chainmail_boots'}})
})