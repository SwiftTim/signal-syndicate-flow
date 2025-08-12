import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Page Not Found — CopyTrade Syndicate</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <link rel="canonical" href={location.pathname} />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="underline text-primary">Return to Home</a>
      </div>
    </main>
  );
};

export default NotFound;
