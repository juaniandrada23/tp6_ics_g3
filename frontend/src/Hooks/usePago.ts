import { useState } from "react";
import { createPago } from "../Service/apiService";
import { useNavigate } from "react-router-dom";
import { PagoData } from "../Types/PagoData";

const usePago = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const procesarPago = async (pagoData: PagoData) => {
    setLoading(true);
    setError(null);

    try {
      await createPago(pagoData);
      setSuccess(true);
      navigate("/dador");
    } catch (err: any) {
      setError(err.message || "Error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, procesarPago };
};

export default usePago;
