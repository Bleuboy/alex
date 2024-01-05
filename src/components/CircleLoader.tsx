interface CircleLoaderProps {
  progress: number;
}

const CircleLoader = ({ progress }: CircleLoaderProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke dashoffset
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <svg className="w-32 h-32" viewBox="0 0 120 120">
        <circle
          className="text-divider"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-green-500 transition-all"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
    </div>
  );
};

export default CircleLoader;
