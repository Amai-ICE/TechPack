// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
  event.remove({ mod: "dysoncubeproject" })

  event.shaped("dysoncubeproject:em_railejector_controller", [
    "RAB",
    "APB",
    "SSS"
  ], {
    R: "oritech:portable_laser",
    A: "mekanism:alloy_atomic",
    B: "dysoncubeproject:beam_package",
    S: "oritech:iron_plating_slab",
    P: "oritech:prometheum_ingot"
  })

  event.shaped("dysoncubeproject:ray_receiver_controller", [
    "SSS",
    "pNp",
    "PPP"
  ], {
    S: "dysoncubeproject:solar_sail_package",
    p: "oritech:prometheum_ingot",
    N: "nether_star",
    P: "oritech:iron_plating_block"
  })

  event.shaped("dysoncubeproject:solar_sail_package", [
    "SAS",
    "SCS",
    "LAL"
  ], {
    S: "mekanismgenerators:solar_panel",
    A: "mekanism:alloy_infused",
    C: "mekanism:ultimate_control_circuit",
    L: "extendedae:entro_ingot"
  })

  event.shaped("4x dysoncubeproject:beam_package", [
    "NSN",
    "BSB",
    "NSN"
  ], {
    N: "avaritia:neutron_nugget",
    S: "mekanism:block_steel",
    B: "enderio:end_steel_bars",
  })
})
