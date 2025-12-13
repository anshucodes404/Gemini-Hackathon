import { AlertTriangle } from "lucide-react";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center gap-2 bg-red-500/20 border border-red-400
    text-red-300 px-4 py-2 rounded-xl
    shadow-[0_0_18px_rgba(239,68,68,0.8)]">
      <AlertTriangle size={16} />
      <span className="text-sm font-semibold">{message}</span>
    </div>
  );
};

export default ErrorMessage;
