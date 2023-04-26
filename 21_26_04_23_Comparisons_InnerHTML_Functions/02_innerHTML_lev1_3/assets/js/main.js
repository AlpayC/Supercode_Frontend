const picOne ="<figure><img src=https://images.unsplash.com/photo-1674574124349-0928f4b2bce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60</img>Fig. 1 </figure>"
const picTwo ="<figure><img src=https://images.unsplash.com/photo-1682361370648-521dce49abb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60</img>Fig. 2 </figure>"
const picThree ="<figure><img src=https://plus.unsplash.com/premium_photo-1682192408126-70498c5f488b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60</img>Fig. 3 </figure>"

document.getElementById("gallery").innerHTML=picOne;
document.getElementById("gallery").innerHTML+=picTwo;
document.getElementById("gallery").innerHTML+=picThree;
