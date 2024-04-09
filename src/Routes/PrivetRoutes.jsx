import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from '../components/Header/Header'

const PrivetRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <>
          <Header/>
        <main className="mx-w-[1020px] mx-auto py-8">
          <div className="container">
            <Outlet />
          </div>
        </main>
        </>
        
      ) : (
        <Navigate />
      )}
    </>
  );
};

export default PrivetRoutes;
