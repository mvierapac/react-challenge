import "./LoadingBar.css";

export const LoadingBar = ({ progress, reveal }) => {
  if (reveal) return null;

  return (
    <div
      className="loading-bar"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};
