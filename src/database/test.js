const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

   Database.then(async (db) => {
  //inserir dados na tabela
 /* await saveOrphanage(db, {
    lat: "-23.198446",
    lng: "-47.304374",
    name: "Casa Esperança",
    about:
      "Contribua para ajudar crianças carentes, elas precisam de sua ajuda.",
    whatsapp: "9876543210",
    images: [
      "/images/z-caderno.jpg",
      "/images/z-cozinha.jpg",
      "/images/z-fly.jpg",
      "/images/z-balanco.jpg",
      "/images/z-brincando.jpg",
      "/images/z-brinquedo.jpg",

    ].toString(),
    instructions:
      "Venha e se sinta à vontade para ajudar as crianças que pecisam.",

    opening_hours: "Horário de visitas Das 15h até 20h",
    open_on_weekends: "1",
  }); */
  //consultar dados na tabela

 //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
// console.log(selectedOrphanages);

  //consultar somente um orfanato pelo id
  const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "11"');
  console.log(orphanages);

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '9'"))
});


// id 1 e 2 da nlw é = id 8 e 11 meu.
// eu já troquei esse id mil xs
// id 10 criei na pg. msm