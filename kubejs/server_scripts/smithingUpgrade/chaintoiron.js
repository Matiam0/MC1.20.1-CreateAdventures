ServerEvents.recipes(e => {
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:chainmail_helmet'},addition: {item: 'minecraft:iron_block'},template:  {item: 'coinsje:iron_coin'},result:  {item: 'minecraft:iron_helmet'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:chainmail_chestplate'},addition: {item: 'minecraft:iron_block'},template:  {item: 'coinsje:iron_coin'},result:  {item: 'minecraft:iron_chestplate'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:chainmail_leggings'},addition: {item: 'minecraft:iron_block'},template:  {item: 'coinsje:iron_coin'},result:  {item: 'minecraft:iron_leggings'}})
    e.custom({type: 'minecraft:smithing_transform',base: {item: 'minecraft:chainmail_boots'},addition: {item: 'minecraft:iron_block'},template:  {item: 'coinsje:iron_coin'},result:  {item: 'minecraft:iron_boots'}})
})