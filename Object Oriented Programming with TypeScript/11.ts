const shipments: Shipment[] = [
    new Package("P001", "Small Package", 1.5, 10, 10, 10),
    new Pallet("PL001", "Large Pallet", 50, 100, 100, 200, 10),
    new Container("C001", "40-foot Container", 5000, 1200, 2400, 2400, 50000)
];

shipments.forEach(shipment => {
    console.log(`Weight: ${shipment.calculateWeight()} kg, Volume: ${shipment.calculateVolume()} cm^
