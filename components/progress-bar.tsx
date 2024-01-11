interface progressProps {
  progress: number;
  bg: string;
}
export default function ProgressBar({ progress, bg }: progressProps) {
  return (
    <div className="w-full h-[10px] bg-[#ecebeb] overflow-hidden mt-3 rounded-full">
      <div
        className={`h-full ${bg} rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
