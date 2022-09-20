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

  g1 = new gempa('bandung',4).infoGempa();
  g2 = new gempa('jakarta',6).infoGempa();
  g3 = new gempa('banten',7).infoGempa();
  g4 = new gempa('sulawesi',8).infoGempa();
  g5 = new gempa('kalimantan',2).infoGempa();
  g6 = new gempa('aceh',1).infoGempa();
  g7 = new gempa('bali',3).infoGempa();
  g8 = new gempa('Medan',5).infoGempa();
  g9 = new gempa('NTT',6).infoGempa();
  g10 = new gempa('NTB',11).infoGempa();


