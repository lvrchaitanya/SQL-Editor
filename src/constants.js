const arr2 = [
  "VINET",
  "TOMSP",
  "HANAR",
  "VICTE",
  "SUPRD",
  "HANAR",
  "CHOPS",
  "RICSU",
  "WELLI",
  "HILAA",
  "ERNSH",
  "CENTC",
  "OTTIK",
  "QUEDE",
  "RATTC",
  "ERNSH",
  "FOLKO",
  "BLONP",
  "WARTH"
];
const arr1 = [
  "10248",
  "10249",
  "10250",
  "10251",
  "10252",
  "10253",
  "10254",
  "10255",
  "10256",
  " 10257",
  " 10258",
  " 10259",
  " 10260",
  " 10261",
  " 10262",
  " 10263",
  " 10264",
  " 10265",
  " 10266"
];
const arr3 = [
  "Reims",
  "Münste",
  "Rio de Janeiro",
  "Lyon",
  "Charleroi",
  "Rio de Janeiro",
  "Bern",
  "Genève",
  "Resende",
  "San Cristóbal",
  "Graz",
  "México D.F.",
  "Köln",
  "Rio de Janeiro",
  "Albuquerque",
  "Graz",
  "Bräcke",
  "Strasbourg",
  "Oulu"
];
const arr4 = [
  "France",
  "Germany",
  "Brazil",
  " France",
  "Belgium",
  "Brazil",
  "Switzerland",
  "Switzerland",
  "Brazil",
  " Venezuela",
  "Austria",
  "Mexico",
  "Germany",
  "Brazil",
  "USA",
  "Austria",
  "Sweden",
  "France",
  " Finland"
];

const sqlQuery =
  " Select\n\tOrderID,\n\tCustomerID,\n\tShipCity,\n\tShipCountary From 'work'\n Where\n\tPayment = 'done'\n And\n\tStatus='Ready'";
export { arr1, arr2, arr3, arr4 };
export { sqlQuery };
