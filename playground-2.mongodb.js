use ("devilstreet")

db .getCollection ("pagos").insertOne(
    {
        "factura": "factura1",
        "cliente": "cliente1",
        "monto": 90.0,
        "fecha": ISODate("2023-10-23T10:30:00Z")
    }
);