bilder = [
  "https://www.miss.at/wp-content/uploads/2019/05/Grumpy-Cat-ist-tot.jpg" , 
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" , 
  "https://www.haz.de/var/storage/images/rnd/nachrichten/wissen/grumpy-cat-co.-die-beruehmtesten-katzen-des-internets/726149213-2-ger-DE/Grumpy-Cat-Co.-Die-beruehmtesten-Katzen-des-Internets_big_teaser_article.jpg" , 
  "https://img.zeit.de/digital/internet/2019-05/grumpy-cat-tod/wide__450x253__mobile" , 
  "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2" , 
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" , 
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg" , 
  "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__340.jpg" , 
  "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775__340.jpg" , 
  "https://cdn.pixabay.com/photo/2018/01/28/12/37/cat-3113513__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332__340.jpg" , 
  "https://cdn.pixabay.com/photo/2020/03/28/15/20/cat-4977436__340.jpg" , 
  "https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780__340.jpg" , 
  "https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544__340.jpg" , 
  "https://cdn.pixabay.com/photo/2015/08/30/10/58/cat-914110__340.jpg" , 
  "https://cdn.pixabay.com/photo/2020/07/09/17/39/puppy-5388151__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/08/23/08/33/cats-eyes-2671903__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462__340.jpg" , 
  "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__340.jpg" , 
  "https://cdn.pixabay.com/photo/2018/03/26/02/05/cat-3261420__340.jpg" , 
  "https://cdn.pixabay.com/photo/2016/05/15/03/29/cat-1393075__340.jpg" , 
  "https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579__340.jpg" , 
  "https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/03/29/09/59/cat-2184682__340.jpg" , 
  "https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232__340.jpg" , 
  "https://cdn.pixabay.com/photo/2018/05/30/19/29/cat-3442257__340.jpg" , 
  "https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961__340.jpg" , 
  "https://cdn.pixabay.com/photo/2013/01/25/13/03/cat-76116__340.jpg" , 
  "https://cdn.pixabay.com/photo/2020/02/20/12/12/cat-4864605__340.jpg" , 
  "https://cdn.pixabay.com/photo/2016/03/09/09/12/cat-1245673__340.jpg"
]
img = document.getElementById("Bild");
rand = (Math.random()*((bilder.length- 0 ))) + 0;
rand = Math.floor(rand);
img.src = bilder[rand]; 
document.getElementById("bilder").innerHTML = "Es gibt " + bilder.length + " Bilder!"
function bildgenerieren(){
  rand = (Math.random()*((bilder.length - 0))) + 0;
  rand = Math.floor(rand);
  img.src = bilder[rand];  
};
