
export const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[200px]">
    <div className="relative h-16 w-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
    </div>
  </div>
);
