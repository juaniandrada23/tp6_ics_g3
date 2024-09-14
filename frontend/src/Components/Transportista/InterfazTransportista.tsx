import React from "react";
import useAuth from "../../Hooks/useAuth";

const InterfazTransportista: React.FC = () => {
  const { user } = useAuth();

  //aca tenemos que hacer la notificacion al transportista
  
  console.log(user);

  return (
    <div>
      <h1>Interfaz de Transportista</h1>
      Bienvenido<h1>{user?.email}</h1>
    </div>
  );
};

export default InterfazTransportista;
