import "./LoadingBar.css";

export const LoadingBar = ({ progress }) => {
  return (
    <div
      className="loading-bar"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};
