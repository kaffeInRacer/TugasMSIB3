let tabel = document.getElementById('data');
let no = 1;

class gempa{
  constructor (lokasi, sekala) {
    this.location = lokasi;
    this.scale    = sekala;
    
}

// Kondisi
dampak() {

  if(this.scale <= 2){ 
    return this.dampakGempa = 'Dampaknya tidak terasa';
  }else if (this.scale > 2 && this.scale <=4){ 
    return this.dampakGempa = 'Dampaknya bangunan retak-retak';
  }else if (this.scale > 4 && this.scale <=6){ 
    return this.dampakGempa = 'Dampaknya bangunan roboh';
  }else{ 
  return this.dampakGempa = 'Berpotensi Tsunami';
  }
}

// Cetak Disini
infoGempa(){
 tabel.innerHTML += `
  <tr>
    <td>${no++}</td>
    <td>${this.location}</td>
    <td>${this.scale}</td>
    <td>${this.dampak()}</td>
  </tr>
  `;

}

}

  a = new gempa('bandung',4).infoGempa();
  b = new gempa('jakarta',6).infoGempa();
  c = new gempa('banten',7).infoGempa();
  d = new gempa('sulawesi',8).infoGempa();
  e = new gempa('kalimantan',2).infoGempa();
  f = new gempa('aceh',1).infoGempa();
  g = new gempa('bali',3).infoGempa();
  h = new gempa('bali',5).infoGempa();

