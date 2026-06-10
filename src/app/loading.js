import "../components/LoadingScreen/LoadingScreen.css";

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="loader-spinner"></div>
        <p>Airport Golden Tulip Hotel...</p>
      </div>
    </div>
  );
}