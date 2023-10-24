import express, { Request, Response } from "express";
import { Ad } from "./types";
import sqlite from "sqlite3"; 

const db = new sqlite.Database('the_good_corner.sqlite'); 

const app = express();
const port = 3000;

let ads: Ad[] = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world !");
});

app.get("/ads", (req: Request, res: Response) => {
  res.send(ads);
  db.all('SELECT * FROM ad', (err, rows)=>{
    if(!err) res.send(rows); 
    else {
      console.log(err); 
      res.sendStatus(500);
     }
  })
});

app.post("/ads", (req: Request, res: Response) => {
  const id = ads.length + 1;
  const newAd = { ...req.body, id, createdAt: new Date().toISOString() }; // spread req.body => récupération de tout l'élément + ajout id en paramètre + date 
  ads.push(newAd);

  res.send("Request receveid, check the backend terminal");
});

app.delete('/ads/:id',(req : Request, res: Response) => {
  const idOfAdToDelete = parseInt(req.params.id, 10);

  if(!ads.find(ad => ad.id === idOfAdToDelete)) return res.sendStatus(404);
  
    /* ads = ads.filter((ad) => ad.id !== idOfAdToDelete);*/  // Methode déclarative : supprimer un élèment de l'id avec une condition si == id du tableau 

    ads.splice(ads.findIndex((ad) => ad.id === idOfAdToDelete), 1) // Méthode impérative : supprimer un élèment du tableau en recherchant l'index

    res.status(204).send({ message: "ad deleted !" });
  
  console.log(idOfAdToDelete);

})

app.patch('/ads/:id', (req: Request, res : Response) => {
  const idOfAdToUpdate = parseInt(req.params.id, 10);

  if(!ads.find(ad => ad.id === idOfAdToUpdate)) return res.sendStatus(404);

      const indexOfAdToUpdate = ads.findIndex((ad) => ad.id === idOfAdToUpdate); 
      ads[indexOfAdToUpdate] = {...ads[indexOfAdToUpdate], ...req.body}; 

      res.send(ads[indexOfAdToUpdate]); 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
