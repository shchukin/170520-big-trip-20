const pointsMocks = [
  {
    "id": "4668b928-cb76-4a9d-b75b-b87d23fab559",
    "base_price": 4576,
    "date_from": "2024-10-08T08:28:01.397Z",
    "date_to": "2024-10-09T20:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": true,
    "offers": [],
    "type": "restaurant"
  },
  {
    "id": "b914e20f-a56f-4b63-891a-b2030779662d",
    "base_price": 6618,
    "date_from": "2024-10-09T20:28:01.397Z",
    "date_to": "2024-10-10T23:28:01.397Z",
    "destination": "c2fd3b13-3b14-4d48-8bb1-029ece679225",
    "is_favorite": false,
    "offers": [
      "da307de5-4b16-4d13-8678-489b13c82fa2"
    ],
    "type": "bus"
  },
  {
    "id": "46a3b889-7884-432b-901b-27c44ae9d554",
    "base_price": 623,
    "date_from": "2024-10-10T23:28:01.397Z",
    "date_to": "2024-10-12T20:28:01.397Z",
    "destination": "c2fd3b13-3b14-4d48-8bb1-029ece679225",
    "is_favorite": false,
    "offers": [
      "2c7eca88-155c-4263-9784-65dd28705068",
      "75e05d37-9e15-4de5-9a83-7863cb51bc50"
    ],
    "type": "restaurant"
  },
  {
    "id": "67a32bc5-8599-49d1-a2dc-ad2a1a9ff7eb",
    "base_price": 3818,
    "date_from": "2024-10-12T20:28:01.397Z",
    "date_to": "2024-10-13T12:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": false,
    "offers": [
      "0a3ae0c6-6f66-4e6f-a31a-aa6854711f64",
      "f61094bd-4065-465d-8366-fe12695b0764",
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "0344b4f1-6244-4f07-b3b8-186b1c25b6e8",
    "base_price": 3339,
    "date_from": "2024-10-13T12:28:01.397Z",
    "date_to": "2024-10-14T09:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": false,
    "offers": [
      "f61094bd-4065-465d-8366-fe12695b0764",
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "36230c51-0a88-48dd-9669-b9547b18889a",
    "base_price": 2596,
    "date_from": "2024-10-14T09:28:01.397Z",
    "date_to": "2024-10-14T22:28:01.397Z",
    "destination": "23c62c27-6005-41dd-b423-408db4e6a2b7",
    "is_favorite": false,
    "offers": [
      "f61094bd-4065-465d-8366-fe12695b0764",
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "c0f1fb36-3359-455e-8dbb-20daf65abfcc",
    "base_price": 7378,
    "date_from": "2024-10-14T22:28:01.397Z",
    "date_to": "2024-10-15T09:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "116aa95e-da58-478a-b5e8-5742bd48eecf",
    "base_price": 8171,
    "date_from": "2024-10-15T09:28:01.397Z",
    "date_to": "2024-10-15T17:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": true,
    "offers": [
      "6352f1fb-cf0e-4e2b-b697-1ee4896c28ea",
      "6a75ef83-d7f2-4b99-bfa6-56ee9c225b3e",
      "0a3ae0c6-6f66-4e6f-a31a-aa6854711f64",
      "f61094bd-4065-465d-8366-fe12695b0764",
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "2eea936a-74f4-4d05-a30f-a1ca62a4e2ef",
    "base_price": 6648,
    "date_from": "2024-10-15T17:28:01.397Z",
    "date_to": "2024-10-16T07:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": false,
    "offers": [
      "d28d0f0f-8ed1-455e-ae0a-4df41f36339b",
      "32a7d7fa-e9cd-4f5c-8754-ec9f4102d24f",
      "4a19229e-e332-4504-8d82-cb6e30c959f6",
      "ee71f444-633d-4067-aa41-9292d439fb10",
      "d7690d86-8165-4879-b9a3-54cff8e5d345",
      "54ab4714-b59f-44e4-a6fc-30f8fcf453a0"
    ],
    "type": "ship"
  },
  {
    "id": "aa32b07e-337d-48ce-8357-0fb8fdffe0f3",
    "base_price": 9249,
    "date_from": "2024-10-16T07:28:01.397Z",
    "date_to": "2024-10-16T22:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": true,
    "offers": [
      "6a75ef83-d7f2-4b99-bfa6-56ee9c225b3e",
      "0a3ae0c6-6f66-4e6f-a31a-aa6854711f64",
      "f61094bd-4065-465d-8366-fe12695b0764",
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "f372c95b-cf03-4553-9e24-aab69580cfc2",
    "base_price": 6680,
    "date_from": "2024-10-16T22:28:01.397Z",
    "date_to": "2024-10-17T20:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": true,
    "offers": [
      "cdb5f8d8-cde1-4beb-a863-85ac8d2b7572",
      "7cc60942-c826-4c83-95f8-e7a854d30639"
    ],
    "type": "train"
  },
  {
    "id": "dfd6820c-5837-4cad-b62b-b9b2993ef6f7",
    "base_price": 1812,
    "date_from": "2024-10-17T20:28:01.397Z",
    "date_to": "2024-10-19T19:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": true,
    "offers": [
      "75e05d37-9e15-4de5-9a83-7863cb51bc50"
    ],
    "type": "restaurant"
  },
  {
    "id": "b77bc14b-c915-400d-b843-3c05711fb17f",
    "base_price": 5808,
    "date_from": "2024-10-19T19:28:01.397Z",
    "date_to": "2024-10-21T19:28:01.397Z",
    "destination": "23c62c27-6005-41dd-b423-408db4e6a2b7",
    "is_favorite": true,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "5b466bdf-687c-4089-8880-9193cfa0c1a0",
    "base_price": 1125,
    "date_from": "2024-10-21T19:28:01.397Z",
    "date_to": "2024-10-23T14:28:01.397Z",
    "destination": "23c62c27-6005-41dd-b423-408db4e6a2b7",
    "is_favorite": false,
    "offers": [
      "7cc60942-c826-4c83-95f8-e7a854d30639"
    ],
    "type": "train"
  },
  {
    "id": "592a4cda-be06-4a1a-8766-96d3199aeba5",
    "base_price": 7547,
    "date_from": "2024-10-23T14:28:01.397Z",
    "date_to": "2024-10-24T12:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": true,
    "offers": [],
    "type": "restaurant"
  },
  {
    "id": "a7aa3ad9-1fad-4c6a-85f4-e460645a6032",
    "base_price": 4795,
    "date_from": "2024-10-24T12:28:01.397Z",
    "date_to": "2024-10-25T10:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": false,
    "offers": [
      "87aa8a81-972f-43e5-ada5-1ebc9acd4514",
      "7794e191-b960-483e-9a86-ad34170aadcb"
    ],
    "type": "drive"
  },
  {
    "id": "06a98a2a-add0-4fb8-b0f3-23d8ffe029a0",
    "base_price": 2680,
    "date_from": "2024-10-25T10:28:01.397Z",
    "date_to": "2024-10-26T23:28:01.397Z",
    "destination": "23c62c27-6005-41dd-b423-408db4e6a2b7",
    "is_favorite": false,
    "offers": [
      "8948c5c3-3214-41e7-8a5e-764ecd0870a9",
      "7c2e3f30-4a28-41d6-826b-a1f80c27a940",
      "fc514649-5a51-4dd7-970c-d223df99ad96"
    ],
    "type": "check-in"
  },
  {
    "id": "fe465d14-82b1-4e33-a6ea-bc993e11f3df",
    "base_price": 6919,
    "date_from": "2024-10-26T23:28:01.397Z",
    "date_to": "2024-10-27T19:28:01.397Z",
    "destination": "756e1f80-53af-47a0-b439-0013ec872394",
    "is_favorite": true,
    "offers": [
      "b6930ae6-a122-4045-9db8-4fb574ef1469",
      "da307de5-4b16-4d13-8678-489b13c82fa2"
    ],
    "type": "bus"
  },
  {
    "id": "9e347465-c4f7-403c-9d61-83c8ee727845",
    "base_price": 9688,
    "date_from": "2024-10-27T19:28:01.397Z",
    "date_to": "2024-10-29T16:28:01.397Z",
    "destination": "23c62c27-6005-41dd-b423-408db4e6a2b7",
    "is_favorite": false,
    "offers": [
      "6352f1fb-cf0e-4e2b-b697-1ee4896c28ea",
      "6a75ef83-d7f2-4b99-bfa6-56ee9c225b3e",
      "0a3ae0c6-6f66-4e6f-a31a-aa6854711f64",
      "f61094bd-4065-465d-8366-fe12695b0764",
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "9f7cbc4d-ae9f-4f09-96aa-33c88bb98126",
    "base_price": 237,
    "date_from": "2024-10-29T16:28:01.397Z",
    "date_to": "2024-10-31T15:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": true,
    "offers": [
      "75e05d37-9e15-4de5-9a83-7863cb51bc50"
    ],
    "type": "restaurant"
  },
  {
    "id": "ef8b070a-f795-4f54-bd6e-0f62021f995f",
    "base_price": 7739,
    "date_from": "2024-10-31T15:28:01.397Z",
    "date_to": "2024-10-31T21:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": false,
    "offers": [],
    "type": "restaurant"
  },
  {
    "id": "013c66c7-82f8-4b66-8ebb-2edde434aa97",
    "base_price": 2347,
    "date_from": "2024-10-31T21:28:01.397Z",
    "date_to": "2024-11-02T09:28:01.397Z",
    "destination": "23c62c27-6005-41dd-b423-408db4e6a2b7",
    "is_favorite": false,
    "offers": [
      "efc4b29e-3500-45a8-995b-4ebe958cd8c8",
      "cdb5f8d8-cde1-4beb-a863-85ac8d2b7572",
      "7cc60942-c826-4c83-95f8-e7a854d30639"
    ],
    "type": "train"
  },
  {
    "id": "697e170b-a756-4fa2-b3bb-b97c1f24bcb1",
    "base_price": 8332,
    "date_from": "2024-11-02T09:28:01.397Z",
    "date_to": "2024-11-02T23:28:01.397Z",
    "destination": "924c30e8-438e-4e08-a49e-71de2690077b",
    "is_favorite": false,
    "offers": [
      "75e05d37-9e15-4de5-9a83-7863cb51bc50"
    ],
    "type": "restaurant"
  },
  {
    "id": "eac80413-a451-4db1-9c51-75eabcf1be92",
    "base_price": 3250,
    "date_from": "2024-11-02T23:28:01.397Z",
    "date_to": "2024-11-03T18:28:01.397Z",
    "destination": "c2fd3b13-3b14-4d48-8bb1-029ece679225",
    "is_favorite": true,
    "offers": [
      "20ef14d4-5de2-4a70-966e-832bd33fec11"
    ],
    "type": "flight"
  },
  {
    "id": "117783e8-24a4-4fca-812f-59f1c93e4aa0",
    "base_price": 8983,
    "date_from": "2024-11-03T18:28:01.397Z",
    "date_to": "2024-11-04T01:28:01.397Z",
    "destination": "564031a7-ff4e-43e0-ad9e-fa1d41d6b801",
    "is_favorite": false,
    "offers": [
      "cdb5f8d8-cde1-4beb-a863-85ac8d2b7572",
      "7cc60942-c826-4c83-95f8-e7a854d30639"
    ],
    "type": "train"
  }
];

export {pointsMocks};
