ServerEvents.recipes(e => {
    //e.shaped(Item.of('', #),['   ','   ','   '],{})
    e.shaped(Item.of('minecraft:chain', 2),['N  ','I  ','N  '],{ N: 'minecraft:iron_nugget', I:'minecraft:iron_ingot'})
    e.shaped(Item.of('minecraft:chainmail_helmet'),['CCC','C C'],{C: 'minecraft:chain'})
    e.shaped(Item.of('minecraft:chainmail_chestplate'),['C C','CCC','CCC'],{C: 'minecraft:chain'})
    e.shaped(Item.of('minecraft:chainmail_leggings'),['CCC','C C','C C'],{C: 'minecraft:chain'})
    e.shaped(Item.of('minecraft:chainmail_boots'),['C C','C C'],{C: 'minecraft:chain'})
})