let bahasa = "bahasa indonesia"

switch(bahasa){
    case "bahasa inggris":
     teks = "this is english";
     break;

     case "bahasa jerman":
     teks = "das ist deutsch";
     break;

     case "bahasa indonesia":
     teks = "ini bahasa indonesia";
     break;

     default:
     teks = "bahasa tidak diketahui";
}

document.getElementById("hasil").innerHTML = teks;