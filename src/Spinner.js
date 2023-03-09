import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

const MyComponent = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // simulate a delay in loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>{isLoading ? <Spinner /> : <div>Loaded content goes here</div>}</div>
  );
};

export default MyComponent;
