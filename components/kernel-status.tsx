export default function KernelStatus() {
  const status = "Not awake"

  return (
    <div className="flex items-center text-xs sm:text-sm">
      <div className="flex items-center">
        <span className="text-white/70">
          <span className="hidden sm:inline">Kernel Status:</span> {status}
        </span>

        {/* Right pulsating light - with reduced glow animation */}
        <div className="relative ml-1 sm:ml-1.5">
          {/* Main light - same size */}
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600/60 relative z-10 kernel-pulse-subtle"></div>
          {/* Outer glow - reduced size and intensity */}
          <div className="absolute -inset-0.25 bg-red-500/15 rounded-full blur-[1px] kernel-pulse-subtle"></div>
        </div>
      </div>
    </div>
  )
}
