const connection = require("../config/db");

const getTransportistas = (req, res) => {
  const { dador_id } = req.params;
  const query = `
  SELECT u.*, t.*, c.estado
  FROM Usuarios u 
  INNER JOIN Transportistas t ON t.usuario_id = u.id 
  INNER JOIN Cotizaciones c ON c.transportista_id = t.id 
  WHERE c.dador_id = ?
`;
  connection.query(query, [dador_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener transportistas" });
    }
    res.json(results);
  });
};

module.exports = { getTransportistas };
