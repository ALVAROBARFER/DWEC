function nomMes(){

    let hoy = new Date();

    const meses = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    document.write("El mes actual es " + meses[hoy.getMonth()]);
}