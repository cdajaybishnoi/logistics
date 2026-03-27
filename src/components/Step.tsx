type StepProps = {
  label: string;
  active: boolean;
};

export default function Step({ label, active }: StepProps) {
  return (
    <div className="flex items-center gap-4 group">
      
      {/* DOT */}
      <div className="relative">
        <div
          className={`w-4 h-4 rounded-full ${
            active ? "bg-green-400 shadow-lg shadow-green-500/50" : "bg-gray-600"
          }`}
        ></div>

        {/* GLOW */}
        {active && (
          <div className="absolute inset-0 rounded-full bg-green-400 blur-md opacity-40"></div>
        )}
      </div>

      {/* TEXT */}
      <p
        className={`transition ${
          active ? "text-white font-medium" : "text-gray-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}